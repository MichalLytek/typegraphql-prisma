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
        cuid     String  @id @default(cuid())
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
          cuid
          color
        }
      }
    `;
    const graphQLSchema = await buildSchema({
      resolvers: [PostCrudResolver],
      validate: false,
      authChecker: () => false,
    });
    const { errors } = await graphql({
      schema: graphQLSchema,
      source: document,
      contextValue: { prisma: {} },
    });

    expect(errors).toMatchInlineSnapshot(`
      Array [
        [GraphQLError: Access denied! You need to be authorized to perform this action!],
      ]
    `);
  }, 10000);

  it("should properly apply descriptor decorators in enhance map", async () => {
    let descriptorCalledFlag = false;
    const {
      applyResolversEnhanceMap,
      PostCrudResolver,
    } = require(outputDirPath);

    applyResolversEnhanceMap({
      Post: {
        post: [
          (): any => {
            return {
              value: () => {
                descriptorCalledFlag = true;
                return null;
              },
            };
          },
        ],
      },
    });

    const document = /* graphql */ `
      query {
        post(where: { cuid: "cjld2cjxh0000qzrmn831i7rn" }) {
          color
        }
      }
    `;
    const graphQLSchema = await buildSchema({
      resolvers: [PostCrudResolver],
      validate: false,
      authChecker: () => true,
    });
    const { data, errors } = await graphql({
      schema: graphQLSchema,
      source: document,
      contextValue: { prisma: {} },
    });

    expect(errors).toBeUndefined();
    expect(data?.post).toBeNull();
    expect(descriptorCalledFlag).toBe(true);
  }, 30000);
});
