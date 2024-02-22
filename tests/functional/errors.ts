import "reflect-metadata";
import { promises as fs } from "fs";
import { buildSchema } from "type-graphql";
import { graphql, GraphQLSchema } from "graphql";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";

describe("errors", () => {
  let outputDirPath: string;
  let graphQLSchema: GraphQLSchema;

  describe("getPrismaFromContext", () => {
    beforeAll(async () => {
      outputDirPath = generateArtifactsDirPath("functional-crud");
      await fs.mkdir(outputDirPath, { recursive: true });
      const prismaSchema = /* prisma */ `
        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;
      await generateCodeFromSchema(prismaSchema, { outputDirPath });
      const { UserCrudResolver } = require(
        outputDirPath + "/resolvers/crud/User/UserCrudResolver.ts",
      );

      graphQLSchema = await buildSchema({
        resolvers: [UserCrudResolver],
        validate: false,
      });
    });

    it("should throw error when prisma not provided in context", async () => {
      const document = /* graphql */ `
        query {
          user(where: { uniqueStringField: "uniqueValue" }) {
            intIdField
            dateField
          }
        }
      `;

      const { errors } = await graphql({
        schema: graphQLSchema,
        source: document,
        contextValue: {
          // prisma: undefined,
        },
      });

      expect(errors).toMatchInlineSnapshot(`
        Array [
          [GraphQLError: Unable to find Prisma Client in GraphQL context. Please provide it under the \`context["prisma"]\` key.],
        ]
      `);
    });
  });
});
