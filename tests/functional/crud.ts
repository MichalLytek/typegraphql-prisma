import "reflect-metadata";
import { promises as fs } from "fs";
import { buildSchema } from "type-graphql";
import { graphql, GraphQLSchema } from "graphql";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";

describe("crud resolvers execution", () => {
  let outputDirPath: string;
  let graphQLSchema: GraphQLSchema;

  describe("basic operations", () => {
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

    it("should properly call PrismaClient on `findUnique` action", async () => {
      const document = /* graphql */ `
        query {
          user(where: { uniqueStringField: "uniqueValue" }) {
            intIdField
            dateField
          }
        }
      `;
      const prismaMock = {
        user: {
          findUnique: jest.fn().mockResolvedValue({
            intIdField: 1,
            dateField: new Date("2019-12-31T14:16:02.572Z"),
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
      expect(prismaMock.user.findUnique.mock.calls).toMatchSnapshot(
        "findUniqueUser call args",
      );
    });

    it("should properly call PrismaClient on `findMany` action", async () => {
      const document = /* graphql */ `
        query {
          users(
            take: 1
            skip: 1
            orderBy: { intIdField: desc }
            where: { dateField: { lte: "2019-12-31T19:16:02.572Z" } }
          ) {
            intIdField
            dateField
          }
        }
      `;
      const prismaMock = {
        user: {
          findMany: jest.fn().mockResolvedValue([
            {
              intIdField: 1,
              dateField: new Date("2019-12-31T14:16:02.572Z"),
            },
          ]),
        },
      };

      const { data, errors } = await graphql({
        schema: graphQLSchema,
        source: document,
        contextValue: { prisma: prismaMock },
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot("users mocked response");
      expect(prismaMock.user.findMany.mock.calls).toMatchSnapshot(
        "findManyUser call args",
      );
    });

    it("should properly call PrismaClient on `create` action", async () => {
      const document = /* graphql */ `
        mutation {
          createOneUser(
            data: {
              uniqueStringField: "unique"
              optionalStringField: "optional"
              dateField: "2019-12-31T14:16:02.572Z"
            }
          ) {
            intIdField
            dateField
          }
        }
      `;
      const prismaMock = {
        user: {
          create: jest.fn().mockResolvedValue({
            intIdField: 1,
            dateField: new Date("2019-12-31T14:16:02.572Z"),
          }),
        },
      };

      const { data, errors } = await graphql({
        schema: graphQLSchema,
        source: document,
        contextValue: { prisma: prismaMock },
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot("createUser mocked response");
      expect(prismaMock.user.create.mock.calls).toMatchSnapshot(
        "createUser call args",
      );
    });

    it("should properly call PrismaClient on `delete` action", async () => {
      const document = /* graphql */ `
        mutation {
          deleteOneUser(
            where: {
              uniqueStringField: "unique"
            }
          ) {
            intIdField
            dateField
          }
        }
      `;
      const prismaMock = {
        user: {
          delete: jest.fn().mockResolvedValue({
            intIdField: 1,
            dateField: new Date("2019-12-31T14:16:02.572Z"),
          }),
        },
      };

      const { data, errors } = await graphql({
        schema: graphQLSchema,
        source: document,
        contextValue: { prisma: prismaMock },
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot("deleteUser mocked response");
      expect(prismaMock.user.delete.mock.calls).toMatchSnapshot(
        "deleteUser call args",
      );
    });

    it("should properly call PrismaClient on `update` action", async () => {
      const document = /* graphql */ `
        mutation {
          updateOneUser(
            data: {
              dateField: {
                set: "2019-12-31T14:16:02.572Z",
              }
            }
            where: {
              uniqueStringField: "unique"
            }
          ) {
            intIdField
            dateField
          }
        }
      `;
      const prismaMock = {
        user: {
          update: jest.fn().mockResolvedValue({
            intIdField: 1,
            dateField: new Date("2019-12-31T14:16:02.572Z"),
          }),
        },
      };

      const { data, errors } = await graphql({
        schema: graphQLSchema,
        source: document,
        contextValue: { prisma: prismaMock },
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot("updateUser mocked response");
      expect(prismaMock.user.update.mock.calls).toMatchSnapshot(
        "updateUser call args",
      );
    });

    it("should properly call PrismaClient on `updateMany` action", async () => {
      const document = /* graphql */ `
        mutation {
          updateManyUser(
            data: {
              optionalStringField: null,
            }
            where: {
              dateField: { lte: "2019-12-31T19:16:02.572Z" }
            }
          ) {
            count
          }
        }
      `;
      const prismaMock = {
        user: {
          updateMany: jest.fn().mockResolvedValue({
            count: 3,
          }),
        },
      };

      const { data, errors } = await graphql({
        schema: graphQLSchema,
        source: document,
        contextValue: { prisma: prismaMock },
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot("updateManyUser mocked response");
      expect(prismaMock.user.updateMany.mock.calls).toMatchSnapshot(
        "updateManyUser call args",
      );
    });

    it("should properly call PrismaClient on `deleteMany` action", async () => {
      const document = /* graphql */ `
        mutation {
          deleteManyUser(
            where: {
              dateField: { lte: "2019-12-31T19:16:02.572Z" }
            }
          ) {
            count
          }
        }
      `;
      const prismaMock = {
        user: {
          deleteMany: jest.fn().mockResolvedValue({
            count: 3,
          }),
        },
      };

      const { data, errors } = await graphql({
        schema: graphQLSchema,
        source: document,
        contextValue: { prisma: prismaMock },
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot("deleteManyUser mocked response");
      expect(prismaMock.user.deleteMany.mock.calls).toMatchSnapshot(
        "deleteManyUser call args",
      );
    });

    it("should properly call PrismaClient on `upsert` action", async () => {
      const document = /* graphql */ `
        mutation {
          upsertOneUser(
            where: {
              uniqueStringField: "unique"
            }
            create: {
              uniqueStringField: "unique"
              optionalStringField: "optional"
              dateField: "2019-12-31T14:16:02.572Z"
            }
            update: {
              optionalStringField: null,
            }
          ) {
            intIdField
            uniqueStringField
            optionalStringField
            dateField
          }
        }
      `;
      const prismaMock = {
        user: {
          upsert: jest.fn().mockResolvedValue({
            intIdField: 1,
            uniqueStringField: "unique",
            optionalStringField: "optional",
            dateField: new Date("2019-12-31T14:16:02.572Z"),
          }),
        },
      };

      const { data, errors } = await graphql({
        schema: graphQLSchema,
        source: document,
        contextValue: { prisma: prismaMock },
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot("upsertUser mocked response");
      expect(prismaMock.user.upsert.mock.calls).toMatchSnapshot(
        "upsertUser call args",
      );
    });

    describe("_count for relations", () => {
      let outputDirPath: string;
      let graphQLSchema: GraphQLSchema;
      beforeAll(async () => {
        outputDirPath = generateArtifactsDirPath("functional-crud");
        await fs.mkdir(outputDirPath, { recursive: true });
        const prismaSchema = /* prisma */ `
          model FirstModel {
            idField            Int            @id @default(autoincrement())
            uniqueStringField  String         @unique
            floatField         Float
            secondModelsField  SecondModel[]
          }
          model SecondModel {
            idField            Int          @id @default(autoincrement())
            uniqueStringField  String       @unique
            floatField         Float
            firstModelFieldId  Int
            firstModelField    FirstModel   @relation(fields: [firstModelFieldId], references: [idField])
          }
        `;
        await generateCodeFromSchema(prismaSchema, { outputDirPath });
        const { FirstModelCrudResolver } = require(
          outputDirPath +
            "/resolvers/crud/FirstModel/FirstModelCrudResolver.ts",
        );

        graphQLSchema = await buildSchema({
          resolvers: [FirstModelCrudResolver],
          validate: false,
        });
      });

      it("should properly call prisma client", async () => {
        const document = /* graphql */ `
          query {
            findFirstFirstModel {
              idField
              _count {
                secondModelsField
              }
            }
          }
        `;
        const prismaMock = {
          firstModel: {
            findFirst: jest.fn().mockResolvedValue({
              idField: 1,
              _count: {
                secondModelsField: 2,
              },
            }),
          },
        };

        const { data, errors } = await graphql({
          schema: graphQLSchema,
          source: document,
          contextValue: { prisma: prismaMock },
        });

        expect(errors).toBeUndefined();
        expect(data).toMatchSnapshot("secondModelsField count mocked response");
        expect(prismaMock.firstModel.findFirst.mock.calls).toMatchSnapshot(
          "firstModel.findFirst call args",
        );
      });
    });
  });

  describe("aggregations", () => {
    beforeAll(async () => {
      outputDirPath = generateArtifactsDirPath("functional-crud");
      await fs.mkdir(outputDirPath, { recursive: true });
      const prismaSchema = /* prisma */ `
        model User {
          idField     Int  @id @default(autoincrement())
          intField    Int
          floatField  Int
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

    it("should properly call PrismaClient on `aggregate` action with simple count field", async () => {
      const document = /* graphql */ `
        query {
          aggregateUser(
            take: 1
            skip: 1
            orderBy: { intField: desc }
            where: { floatField: { lte: 50 } }
          ) {
            _count {
              _all
            }
          }
        }
      `;
      const prismaMock = {
        user: {
          aggregate: jest.fn().mockResolvedValue({ _count: { _all: 5 } }),
        },
      };

      const { data, errors } = await graphql({
        schema: graphQLSchema,
        source: document,
        contextValue: { prisma: prismaMock },
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot("aggregateUserCount mocked response");
      expect(prismaMock.user.aggregate.mock.calls).toMatchSnapshot(
        "user.aggregate call args",
      );
    });

    it("should properly call PrismaClient on `aggregate` action with advanced operations", async () => {
      const document = /* graphql */ `
        query {
          aggregateUser(
            take: 1
            skip: 1
            orderBy: { intField: desc }
            where: { floatField: { lte: 50 } }
          ) {
            __typename
            _count {
              intField
              floatField
            }
            _min {
              __typename
              intField
              floatField
            }
            _max {
              __typename
              intField
              floatField
            }
            _sum {
              __typename
              intField
              floatField
            }
            _avg {
              __typename
              intField
              floatField
            }
          }
        }
      `;
      const prismaMock = {
        user: {
          aggregate: jest.fn().mockResolvedValue({
            _count: {
              intField: 1,
              floatField: 1,
            },
            _min: {
              intField: 0,
              floatField: 0,
            },
            _max: {
              intField: 10,
              floatField: 10,
            },
            _sum: {
              intField: 10,
              floatField: 10,
            },
            _avg: {
              intField: 5,
              floatField: 5,
            },
          }),
        },
      };

      const { data, errors } = await graphql({
        schema: graphQLSchema,
        source: document,
        contextValue: { prisma: prismaMock },
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot("aggregateUser mocked response");
      expect(prismaMock.user.aggregate.mock.calls).toMatchSnapshot(
        "user.aggregate call args",
      );
    });

    it("should properly call PrismaClient on `groupBy` action with advanced operations", async () => {
      const document = /* graphql */ `
        query {
          groupByUser(
            by: [intField]
            where: { floatField: { gte: 0 } }
          ) {
            __typename
            intField
            _count {
              __typename
              _all
            }
            _min {
              __typename
              intField
              floatField
            }
          }
        }
      `;
      const prismaMock = {
        user: {
          groupBy: jest.fn().mockResolvedValue([
            {
              intField: 10,
              _count: {
                _all: 5,
              },
              _min: {
                intField: 0,
                floatField: 0,
              },
            },
          ]),
        },
      };

      const { data, errors } = await graphql({
        schema: graphQLSchema,
        source: document,
        contextValue: { prisma: prismaMock },
      });

      expect(errors).toBeUndefined();
      expect(data).toMatchSnapshot("groupByUser mocked response");
      expect(prismaMock.user.groupBy.mock.calls).toMatchSnapshot(
        "user.groupBy call args",
      );
    });
  });
});
