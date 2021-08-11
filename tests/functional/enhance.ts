import "reflect-metadata";
import { promises as fs } from "fs";
import { buildSchema, Authorized } from "type-graphql";
import { graphql } from "graphql";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";

describe("custom resolvers execution", () => {
  let outputDirPath: string;

  beforeAll(async () => {
    outputDirPath = generateArtifactsDirPath("functional-enhance");
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
    await generateCodeFromSchema(prismaSchema, { outputDirPath });
  });

  it("should properly apply decorators in enhance map", async () => {
    const {
      applyResolversEnhanceMap,
      PostCrudResolver,
    } = require(outputDirPath);

    applyResolversEnhanceMap({
      Post: {
        posts: [Authorized()],
      },
    });

    const document = /* graphql */ `
      query {
        posts(
          take: 1
          skip: 1
          where: {
            content: { startsWith: "Test" }
          }
          orderBy: {
            color: desc
          }
        ) {
          uuid
          color
        }
      }
    `;
    const graphQLSchema = await buildSchema({
      resolvers: [PostCrudResolver],
      validate: false,
      authChecker: () => false,
      emitSchemaFile: outputDirPath + "/schema.graphql",
    });
    const { errors } = await graphql(graphQLSchema, document, null, {
      prisma: {},
    });

    expect(errors).toMatchInlineSnapshot(`
      Array [
        [GraphQLError: Access denied! You need to be authorized to perform this action!],
      ]
    `);
  }, 30000);
});
