import { promises as fs } from "fs";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe("crud", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("regression-crud");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  it("should properly generate resolver class for single prisma model", async () => {
    const schema = /* prisma */ `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

      model User {
        intIdField          Int     @id @default(autoincrement())
        uniqueStringField   String  @unique
        optionalStringField String?
        dateField           DateTime
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const userCrudResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/UserCrudResolver.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/crud/index.ts");
    const argsIndexTSFile = await readGeneratedFile(
      "/resolvers/crud/args.index.ts",
    );
    const crudIndexTSFile = await readGeneratedFile(
      "/resolvers/crud/resolvers-crud.index.ts",
    );
    const actionsIndexTSFile = await readGeneratedFile(
      "/resolvers/crud/resolvers-actions.index.ts",
    );
    const mainIndexTSFile = await readGeneratedFile("/index.ts");

    expect(userCrudResolverTSFile).toMatchSnapshot("UserCrudResolver");
    expect(indexTSFile).toMatchSnapshot("Index");
    expect(argsIndexTSFile).toMatchSnapshot("argsIndex");
    expect(crudIndexTSFile).toMatchSnapshot("crudIndex");
    expect(actionsIndexTSFile).toMatchSnapshot("actionsIndex");
    expect(mainIndexTSFile).toMatchSnapshot("mainIndex");
  });

  it("should properly generate resolver class when useOriginalMapping is used", async () => {
    const schema = /* prisma */ `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

      model User {
        intIdField          Int     @id @default(autoincrement())
        uniqueStringField   String  @unique
        optionalStringField String?
        dateField           DateTime
      }
    `;

    await generateCodeFromSchema(schema, {
      outputDirPath,
      useOriginalMapping: true,
    });
    const userCrudResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/UserCrudResolver.ts",
    );
    const findUniqueUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/FindUniqueUserResolver.ts",
    );

    expect(userCrudResolverTSFile).toMatchSnapshot("UserCrudResolver");
    expect(findUniqueUserResolverTSFile).toMatchSnapshot(
      "FindUniqueUserResolver",
    );
  });

  it("should properly generate resolver class when cannot pluralize model name", async () => {
    const schema = /* prisma */ `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

      model Staff {
        intIdField          Int     @id @default(autoincrement())
        uniqueStringField   String  @unique
        optionalStringField String?
        dateField           DateTime
      }
    `;

    await generateCodeFromSchema(schema, {
      outputDirPath,
    });
    const staffCrudResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/Staff/StaffCrudResolver.ts",
    );

    expect(staffCrudResolverTSFile).toMatchSnapshot("StaffCrudResolver");
  });

  it("should properly generate args classes for every method of crud resolver", async () => {
    const schema = /* prisma */ `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

      model User {
        intIdField          Int     @id @default(autoincrement())
        uniqueStringField   String  @unique
        optionalStringField String?
        dateField           DateTime
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const aggregateUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/AggregateUserArgs.ts",
    );
    const createUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/CreateUserArgs.ts",
    );
    const deleteManyUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/DeleteManyUserArgs.ts",
    );
    const deleteUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/DeleteUserArgs.ts",
    );
    const findManyUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/FindManyUserArgs.ts",
    );
    const findFirstUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/FindFirstUserArgs.ts",
    );
    const findUniqueUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/FindUniqueUserArgs.ts",
    );
    const updateManyUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/UpdateManyUserArgs.ts",
    );
    const updateUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/UpdateUserArgs.ts",
    );
    const upsertUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/UpsertUserArgs.ts",
    );
    const indexTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/index.ts",
    );

    expect(aggregateUserArgsTSFile).toMatchSnapshot("AggregateUserArgs");
    expect(createUserArgsTSFile).toMatchSnapshot("CreateUserArgs");
    expect(deleteManyUserArgsTSFile).toMatchSnapshot("DeleteManyUserArgs");
    expect(deleteUserArgsTSFile).toMatchSnapshot("DeleteUserArgs");
    expect(findManyUserArgsTSFile).toMatchSnapshot("FindManyUserArgs");
    expect(findFirstUserArgsTSFile).toMatchSnapshot("FindFirstUserArgs");
    expect(findUniqueUserArgsTSFile).toMatchSnapshot("FindUniqueUserArgs");
    expect(updateManyUserArgsTSFile).toMatchSnapshot("UpdateManyUserArgs");
    expect(updateUserArgsTSFile).toMatchSnapshot("UpdateUserArgs");
    expect(upsertUserArgsTSFile).toMatchSnapshot("UpsertUserArgs");
    expect(indexTSFile).toMatchSnapshot("Index");
  });

  it("should properly generate actions resolver classes for prisma model", async () => {
    const schema = /* prisma */ `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

      model User {
        intIdField          Int     @id @default(autoincrement())
        uniqueStringField   String  @unique
        optionalStringField String?
        dateField           DateTime
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const createUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/CreateUserResolver.ts",
    );
    const deleteManyUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/DeleteManyUserResolver.ts",
    );
    const deleteUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/DeleteUserResolver.ts",
    );
    const findManyUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/FindManyUserResolver.ts",
    );
    const findFirstUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/FindFirstUserResolver.ts",
    );
    const findUniqueUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/FindUniqueUserResolver.ts",
    );
    const updateManyUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/UpdateManyUserResolver.ts",
    );
    const updateUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/UpdateUserResolver.ts",
    );
    const upsertUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/UpsertUserResolver.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/crud/index.ts");
    const argsIndexTSFile = await readGeneratedFile(
      "/resolvers/crud/args.index.ts",
    );
    const crudIndexTSFile = await readGeneratedFile(
      "/resolvers/crud/resolvers-crud.index.ts",
    );
    const actionsIndexTSFile = await readGeneratedFile(
      "/resolvers/crud/resolvers-actions.index.ts",
    );

    expect(createUserResolverTSFile).toMatchSnapshot("CreateOneUserResolver");
    expect(deleteManyUserResolverTSFile).toMatchSnapshot(
      "DeleteManyUserResolver",
    );
    expect(deleteUserResolverTSFile).toMatchSnapshot("DeleteUserResolver");
    expect(findManyUserResolverTSFile).toMatchSnapshot("FindManyUserResolver");
    expect(findFirstUserResolverTSFile).toMatchSnapshot(
      "FindFirstUserResolver",
    );
    expect(findUniqueUserResolverTSFile).toMatchSnapshot(
      "FindUniqueUserResolver",
    );
    expect(updateManyUserResolverTSFile).toMatchSnapshot(
      "UpdateManyUserResolver",
    );
    expect(updateUserResolverTSFile).toMatchSnapshot("UpdateUserResolver");
    expect(upsertUserResolverTSFile).toMatchSnapshot("UpsertUserResolver");
    expect(indexTSFile).toMatchSnapshot("Index");
    expect(argsIndexTSFile).toMatchSnapshot("argsIndex");
    expect(crudIndexTSFile).toMatchSnapshot("crudIndex");
    expect(actionsIndexTSFile).toMatchSnapshot("actionsIndex");
  });

  describe("when model is renamed", () => {
    it("should properly generate resolver class for single prisma model", async () => {
      const schema = /* prisma */ `
        datasource db {
          provider = "postgresql"
          url      = env("DATABASE_URL")
        }

        /// @@TypeGraphQL.type(name: "Client")
        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        useOriginalMapping: true,
      });
      const clientCrudResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/ClientCrudResolver.ts",
      );

      expect(clientCrudResolverTSFile).toMatchSnapshot("ClientCrudResolver");
    });

    it("should properly generate args classes for every method of crud resolver", async () => {
      const schema = /* prisma */ `
        datasource db {
          provider = "postgresql"
          url      = env("DATABASE_URL")
        }

        /// @@TypeGraphQL.type(name: "Client")
        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const aggregateClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/AggregateClientArgs.ts",
      );
      const createClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/CreateClientArgs.ts",
      );
      const deleteManyClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/DeleteManyClientArgs.ts",
      );
      const deleteClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/DeleteClientArgs.ts",
      );
      const findManyClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/FindManyClientArgs.ts",
      );
      const findFirstClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/FindFirstClientArgs.ts",
      );
      const findUniqueClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/FindUniqueClientArgs.ts",
      );
      const updateManyClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/UpdateManyClientArgs.ts",
      );
      const updateClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/UpdateClientArgs.ts",
      );
      const upsertClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/UpsertClientArgs.ts",
      );
      const indexTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/index.ts",
      );

      expect(aggregateClientArgsTSFile).toMatchSnapshot("AggregateClientArgs");
      expect(createClientArgsTSFile).toMatchSnapshot("CreateClientArgs");
      expect(deleteManyClientArgsTSFile).toMatchSnapshot(
        "DeleteManyClientArgs",
      );
      expect(deleteClientArgsTSFile).toMatchSnapshot("DeleteClientArgs");
      expect(findManyClientArgsTSFile).toMatchSnapshot("FindManyClientArgs");
      expect(findFirstClientArgsTSFile).toMatchSnapshot("FindFirstClientArgs");
      expect(findUniqueClientArgsTSFile).toMatchSnapshot(
        "FindUniqueClientArgs",
      );
      expect(updateManyClientArgsTSFile).toMatchSnapshot(
        "UpdateManyClientArgs",
      );
      expect(updateClientArgsTSFile).toMatchSnapshot("UpdateClientArgs");
      expect(upsertClientArgsTSFile).toMatchSnapshot("UpsertClientArgs");
      expect(indexTSFile).toMatchSnapshot("Index");
    });

    it("should properly generate actions resolver classes for prisma model", async () => {
      const schema = /* prisma */ `
        datasource db {
          provider = "postgresql"
          url      = env("DATABASE_URL")
        }

        /// @@TypeGraphQL.type(name: "Client")
        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const createClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/CreateClientResolver.ts",
      );
      const deleteManyClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/DeleteManyClientResolver.ts",
      );
      const deleteClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/DeleteClientResolver.ts",
      );
      const findManyClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/FindManyClientResolver.ts",
      );
      const findFirstClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/FindFirstClientResolver.ts",
      );
      const findUniqueClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/FindUniqueClientResolver.ts",
      );
      const updateManyClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/UpdateManyClientResolver.ts",
      );
      const updateClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/UpdateClientResolver.ts",
      );
      const upsertClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/UpsertClientResolver.ts",
      );

      expect(createClientResolverTSFile).toMatchSnapshot(
        "CreateOneClientResolver",
      );
      expect(deleteManyClientResolverTSFile).toMatchSnapshot(
        "DeleteManyClientResolver",
      );
      expect(deleteClientResolverTSFile).toMatchSnapshot(
        "DeleteClientResolver",
      );
      expect(findManyClientResolverTSFile).toMatchSnapshot(
        "FindManyClientResolver",
      );
      expect(findFirstClientResolverTSFile).toMatchSnapshot(
        "FindFirstClientResolver",
      );
      expect(findUniqueClientResolverTSFile).toMatchSnapshot(
        "FindUniqueClientResolver",
      );
      expect(updateManyClientResolverTSFile).toMatchSnapshot(
        "UpdateManyClientResolver",
      );
      expect(updateClientResolverTSFile).toMatchSnapshot(
        "UpdateClientResolver",
      );
      expect(upsertClientResolverTSFile).toMatchSnapshot(
        "UpsertClientResolver",
      );
    });
  });

  describe("when preview feature `groupBy` is enabled", () => {
    it("should properly generate group by resolver class and crud method for prisma model", async () => {
      const schema = /* prisma */ `
        datasource db {
          provider = "postgresql"
          url      = env("DATABASE_URL")
        }

        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        enabledPreviewFeatures: ["groupBy"],
      });
      const groupByUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/User/GroupByUserResolver.ts",
      );
      const userCrudResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/User/UserCrudResolver.ts",
      );
      const actionsIndexTSFile = await readGeneratedFile(
        "/resolvers/crud/resolvers-actions.index.ts",
      );

      expect(groupByUserResolverTSFile).toMatchSnapshot("GroupByUserResolver");
      expect(actionsIndexTSFile).toMatchSnapshot("actionsIndex");
      expect(userCrudResolverTSFile).toMatchSnapshot("UserCrudResolver");
    });

    it("should properly generate group by args class for prisma model", async () => {
      const schema = /* prisma */ `
        datasource db {
          provider = "postgresql"
          url      = env("DATABASE_URL")
        }

        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        enabledPreviewFeatures: ["groupBy"],
      });
      const groupByUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/GroupByUserArgs.ts",
      );
      const indexTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/index.ts",
      );

      expect(groupByUserArgsTSFile).toMatchSnapshot("GroupByUserArgs");
      expect(indexTSFile).toMatchSnapshot("Index");
    });
  });

  describe("when useUncheckedScalarInputs mode is enabled", () => {
    it("should properly generate create and update args classes", async () => {
      const schema = /* prisma */ `
        datasource db {
          provider = "postgresql"
          url      = env("DATABASE_URL")
        }

        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        useUncheckedScalarInputs: true,
      });
      const createUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/CreateUserArgs.ts",
      );
      const updateManyUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/UpdateManyUserArgs.ts",
      );
      const updateUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/UpdateUserArgs.ts",
      );
      const upsertUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/UpsertUserArgs.ts",
      );

      expect(createUserArgsTSFile).toMatchSnapshot("CreateUserArgs");
      expect(updateManyUserArgsTSFile).toMatchSnapshot("UpdateManyUserArgs");
      expect(updateUserArgsTSFile).toMatchSnapshot("UpdateUserArgs");
      expect(upsertUserArgsTSFile).toMatchSnapshot("UpsertUserArgs");
    });
  });

  describe("when `createMany` preview feature is enabled", () => {
    it("should properly generate createMany method, resolver and args classes", async () => {
      const schema = /* prisma */ `
        datasource db {
          provider = "postgresql"
          url      = env("DATABASE_URL")
        }

        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        enabledPreviewFeatures: ["createMany"],
      });
      const createManyUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/CreateManyUserArgs.ts",
      );
      const argsIndexTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/index.ts",
      );
      const createManyUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/User/CreateManyUserResolver.ts",
      );
      const userCrudResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/User/UserCrudResolver.ts",
      );
      const actionsIndexTSFile = await readGeneratedFile(
        "/resolvers/crud/resolvers-actions.index.ts",
      );

      expect(createManyUserResolverTSFile).toMatchSnapshot(
        "CreateManyUserResolver",
      );
      expect(userCrudResolverTSFile).toMatchSnapshot("UserCrudResolver");
      expect(createManyUserArgsTSFile).toMatchSnapshot("CreateManyUserArgs");
      expect(actionsIndexTSFile).toMatchSnapshot("actionsIndex");
      expect(argsIndexTSFile).toMatchSnapshot("argsIndex");
    });
  });

  describe("when emitTranspiledCode is set to true", () => {
    it("should properly generate imports in js files for resolver classes", async () => {
      const schema = /* prisma */ `
        datasource db {
          provider = "postgresql"
          url      = env("DATABASE_URL")
        }

        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        emitTranspiledCode: true,
      });
      const userCrudResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/User/UserCrudResolver.js",
      );

      expect(userCrudResolverTSFile).toMatchSnapshot("UserCrudResolver");
    }, 20000);
  });
});
