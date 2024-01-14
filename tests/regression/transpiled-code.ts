import "reflect-metadata";
import { promises as fs } from "fs";
import { buildSchema, Query, Resolver, Args, Ctx } from "type-graphql";
import { graphql } from "graphql";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";

describe("transpiled code", () => {
  let outputDirPath: string;

  beforeAll(async () => {
    outputDirPath = generateArtifactsDirPath("functional-custom-resolvers");
    await fs.mkdir(outputDirPath, { recursive: true });
    const prismaSchema = /* prisma */ `
      enum Color {
        RED
        GREEN
        BLUE
      }

      model Post {
        uuid     String  @id @default(cuid())
        content  String
        color    Color
      }
    `;
    await generateCodeFromSchema(prismaSchema, {
      outputDirPath,
      emitTranspiledCode: true,
    });
  });

  it("should not set keys in input which are not specified by request variables", async () => {
    const { Post, FindManyPostArgs } = require(outputDirPath);
    @Resolver()
    class CustomResolver {
      @Query(_returns => [Post])
      async customFindManyPost(
        @Args(_type => FindManyPostArgs) args: any,
        @Ctx() { prisma }: any,
      ) {
        return await prisma.post.findMany(args);
      }
    }
    const document = /* graphql */ `
      query {
        customFindManyPost(
          where: {
            content: { startsWith: "Test" }
          }
        ) {
          uuid
          color
        }
      }
    `;
    const prismaMock = {
      post: {
        findMany: jest.fn().mockResolvedValue([
          {
            uuid: "b0c0d78e-4dff-4cdd-ba23-9b417dc684e2",
            color: "RED",
          },
          {
            uuid: "72c8a188-3d46-45b3-b23f-7d420aa282f1",
            color: "BLUE",
          },
        ]),
      },
    };

    const graphQLSchema = await buildSchema({
      resolvers: [CustomResolver],
      validate: false,
      emitSchemaFile: outputDirPath + "/schema.graphql",
    });
    const graphQLSchemaSDL = await fs.readFile(
      outputDirPath + "/schema.graphql",
      { encoding: "utf8" },
    );

    const { data, errors } = await graphql({
      schema: graphQLSchema,
      source: document,
      contextValue: { prisma: prismaMock },
    });

    expect(errors).toBeUndefined();
    const prismaArgs = prismaMock.post.findMany.mock.calls[0][0] as any;
    expect(Object.keys(prismaArgs)).toEqual(["where"]);
    expect(Object.keys(prismaArgs.where)).toEqual(["content"]);
  }, 60000);
});
