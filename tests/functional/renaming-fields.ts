import "reflect-metadata";
import { promises as fs } from "fs";
import { buildSchema } from "type-graphql";
import { graphql } from "graphql";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";

describe("crud resolvers execution", () => {
  let outputDirPath: string;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("renaming-fields");
    await fs.mkdir(outputDirPath, { recursive: true });
  });

  it("should properly resolve aliased field values from prisma model values", async () => {
    const prismaSchema = /* prisma */ `
      model User {
        id           Int       @id @default(autoincrement())
        dateOfBirth  DateTime
        /// @TypeGraphQL.field(name: "firstName")
        name         String
      }
    `;
    await generateCodeFromSchema(prismaSchema, { outputDirPath });
    const { UserCrudResolver } = require(
      outputDirPath + "/resolvers/crud/User/UserCrudResolver.ts",
    );
    const graphQLSchema = await buildSchema({
      resolvers: [UserCrudResolver],
      validate: false,
    });
    const document = /* graphql */ `
      query {
        user(where: { id: 1 }) {
          id
          dateOfBirth
          firstName
        }
      }
    `;
    const prismaMock = {
      user: {
        findUnique: jest.fn().mockResolvedValue({
          id: 1,
          dateOfBirth: new Date("2019-12-31T14:16:02.572Z"),
          name: "John",
        }),
      },
    };

    const { data, errors } = await graphql({
      schema: graphQLSchema,
      source: document,
      contextValue: { prisma: prismaMock },
    });

    expect(errors).toBeUndefined();
    expect(data).toMatchSnapshot("user mocked response");
  });

  it("should properly map aliased input field values to prisma input values", async () => {
    const prismaSchema = /* prisma */ `
      model User {
        id           Int       @id @default(autoincrement())
        dateOfBirth  DateTime
        /// @TypeGraphQL.field(name: "firstName")
        name         String
      }
    `;
    await generateCodeFromSchema(prismaSchema, { outputDirPath });
    const { UserCrudResolver } = require(
      outputDirPath + "/resolvers/crud/User/UserCrudResolver.ts",
    );
    const graphQLSchema = await buildSchema({
      resolvers: [UserCrudResolver],
      validate: false,
    });
    const document = /* graphql */ `
      query {
        users(where: { firstName: { equals: "John" }}) {
          id
        }
      }
    `;
    const prismaMock = {
      user: {
        findMany: jest.fn().mockResolvedValue([{ id: 1 }]),
      },
    };

    const { errors } = await graphql({
      schema: graphQLSchema,
      source: document,
      contextValue: { prisma: prismaMock },
    });

    expect(errors).toBeUndefined();
    expect(prismaMock.user.findMany.mock.calls).toMatchSnapshot(
      "findManyUser call args",
    );
  });
});
