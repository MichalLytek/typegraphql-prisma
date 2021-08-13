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
    const groupByUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/GroupByUserArgs.ts",
    );
    const createManyUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/CreateManyUserArgs.ts",
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
    expect(groupByUserArgsTSFile).toMatchSnapshot("GroupByUserArgs");
    expect(createManyUserArgsTSFile).toMatchSnapshot("CreateManyUserArgs");
    expect(indexTSFile).toMatchSnapshot("Index");
  });

  it("should properly generate actions resolver classes for prisma model", async () => {
    const schema = /* prisma */ `
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
    const groupByUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/GroupByUserResolver.ts",
    );
    const createManyUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/CreateManyUserResolver.ts",
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
    expect(groupByUserResolverTSFile).toMatchSnapshot("GroupByUserResolver");
    expect(createManyUserResolverTSFile).toMatchSnapshot(
      "CreateManyUserResolver",
    );
    expect(indexTSFile).toMatchSnapshot("Index");
    expect(argsIndexTSFile).toMatchSnapshot("argsIndex");
    expect(crudIndexTSFile).toMatchSnapshot("crudIndex");
    expect(actionsIndexTSFile).toMatchSnapshot("actionsIndex");
  });

  describe("when model is renamed", () => {
    it("should properly generate resolver class for single prisma model", async () => {
      const schema = /* prisma */ `
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
      const groupByClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/GroupByClientArgs.ts",
      );
      const createManyClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/CreateManyClientArgs.ts",
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
      expect(groupByClientArgsTSFile).toMatchSnapshot("GroupByClientArgs");
      expect(createManyClientArgsTSFile).toMatchSnapshot(
        "CreateManyClientArgs",
      );
      expect(indexTSFile).toMatchSnapshot("Index");
    });

    it("should properly generate actions resolver classes for prisma model", async () => {
      const schema = /* prisma */ `
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
      const groupByClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/GroupByClientResolver.ts",
      );
      const createManyClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/CreateManyClientResolver.ts",
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
      expect(groupByClientResolverTSFile).toMatchSnapshot(
        "GroupByClientResolver",
      );
      expect(createManyClientResolverTSFile).toMatchSnapshot(
        "CreateManyClientResolver",
      );
    });
  });

  describe("when model has prefix", () => {
    it("should properly generate resolver class for single prisma model", async () => {
      const schema = /* prisma */ `
        /// @@TypeGraphQL.type(name: "UUser")
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
      const uuserCrudResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/UUserCrudResolver.ts",
      );

      expect(uuserCrudResolverTSFile).toMatchSnapshot("UUserCrudResolver");
    });

    it("should properly generate args classes for every method of crud resolver", async () => {
      const schema = /* prisma */ `
        /// @@TypeGraphQL.type(name: "UUser")
        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const aggregateUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/AggregateUUserArgs.ts",
      );
      const createUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/CreateUUserArgs.ts",
      );
      const deleteManyUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/DeleteManyUUserArgs.ts",
      );
      const deleteUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/DeleteUUserArgs.ts",
      );
      const findManyUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/FindManyUUserArgs.ts",
      );
      const findFirstUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/FindFirstUUserArgs.ts",
      );
      const findUniqueUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/FindUniqueUUserArgs.ts",
      );
      const updateManyUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/UpdateManyUUserArgs.ts",
      );
      const updateUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/UpdateUUserArgs.ts",
      );
      const upsertUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/UpsertUUserArgs.ts",
      );
      const groupByUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/GroupByUUserArgs.ts",
      );
      const createManyUUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/CreateManyUUserArgs.ts",
      );
      const indexTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/args/index.ts",
      );

      expect(aggregateUUserArgsTSFile).toMatchSnapshot("AggregateUUserArgs");
      expect(createUUserArgsTSFile).toMatchSnapshot("CreateUUserArgs");
      expect(deleteManyUUserArgsTSFile).toMatchSnapshot("DeleteManyUUserArgs");
      expect(deleteUUserArgsTSFile).toMatchSnapshot("DeleteUUserArgs");
      expect(findManyUUserArgsTSFile).toMatchSnapshot("FindManyUUserArgs");
      expect(findFirstUUserArgsTSFile).toMatchSnapshot("FindFirstUUserArgs");
      expect(findUniqueUUserArgsTSFile).toMatchSnapshot("FindUniqueUUserArgs");
      expect(updateManyUUserArgsTSFile).toMatchSnapshot("UpdateManyUUserArgs");
      expect(updateUUserArgsTSFile).toMatchSnapshot("UpdateUUserArgs");
      expect(upsertUUserArgsTSFile).toMatchSnapshot("UpsertUUserArgs");
      expect(groupByUUserArgsTSFile).toMatchSnapshot("GroupByUUserArgs");
      expect(createManyUUserArgsTSFile).toMatchSnapshot("CreateManyUUserArgs");
      expect(indexTSFile).toMatchSnapshot("Index");
    });

    it("should properly generate actions resolver classes for prisma model", async () => {
      const schema = /* prisma */ `
        /// @@TypeGraphQL.type(name: "UUser")
        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const aggregateUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/AggregateUUserResolver.ts",
      );
      const createUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/CreateUUserResolver.ts",
      );
      const deleteManyUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/DeleteManyUUserResolver.ts",
      );
      const deleteUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/DeleteUUserResolver.ts",
      );
      const findManyUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/FindManyUUserResolver.ts",
      );
      const findFirstUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/FindFirstUUserResolver.ts",
      );
      const findUniqueUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/FindUniqueUUserResolver.ts",
      );
      const updateManyUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/UpdateManyUUserResolver.ts",
      );
      const updateUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/UpdateUUserResolver.ts",
      );
      const upsertUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/UpsertUUserResolver.ts",
      );
      const groupByUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/GroupByUUserResolver.ts",
      );
      const createManyUUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/UUser/CreateManyUUserResolver.ts",
      );

      expect(aggregateUUserResolverTSFile).toMatchSnapshot(
        "AggregateUUserResolver",
      );
      expect(createUUserResolverTSFile).toMatchSnapshot(
        "CreateOneUUserResolver",
      );
      expect(deleteManyUUserResolverTSFile).toMatchSnapshot(
        "DeleteManyUUserResolver",
      );
      expect(deleteUUserResolverTSFile).toMatchSnapshot("DeleteUUserResolver");
      expect(findManyUUserResolverTSFile).toMatchSnapshot(
        "FindManyUUserResolver",
      );
      expect(findFirstUUserResolverTSFile).toMatchSnapshot(
        "FindFirstUUserResolver",
      );
      expect(findUniqueUUserResolverTSFile).toMatchSnapshot(
        "FindUniqueUUserResolver",
      );
      expect(updateManyUUserResolverTSFile).toMatchSnapshot(
        "UpdateManyUUserResolver",
      );
      expect(updateUUserResolverTSFile).toMatchSnapshot("UpdateUUserResolver");
      expect(upsertUUserResolverTSFile).toMatchSnapshot("UpsertUUserResolver");
      expect(groupByUUserResolverTSFile).toMatchSnapshot(
        "GroupByUUserResolver",
      );
      expect(createManyUUserResolverTSFile).toMatchSnapshot(
        "CreateManyUUserResolver",
      );
    });
  });

  describe("when useUncheckedScalarInputs mode is enabled", () => {
    it("should properly generate create and update args classes", async () => {
      const schema = /* prisma */ `
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

  describe("when `orderByRelation` preview feature is enabled", () => {
    it("should properly generate args classes for sorting by many-to-many relation fields", async () => {
      const schema = /* prisma */ `
        model FirstModel {
          idField            Int            @id @default(autoincrement())
          uniqueStringField  String         @unique
          floatField         Float
          secondModelsField  SecondModel[]
        }
        model SecondModel {
          idField            Int           @id @default(autoincrement())
          uniqueStringField  String        @unique
          floatField         Float
          firstModelsField   FirstModel[]
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        previewFeatures: ["orderByRelation"],
      });
      const aggregateFirstModelArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/FirstModel/args/AggregateFirstModelArgs.ts",
      );
      const findFirstFirstModelArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/FirstModel/args/FindFirstFirstModelArgs.ts",
      );
      const findManyFirstModelArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/FirstModel/args/FindManyFirstModelArgs.ts",
      );
      const indexTSFile = await readGeneratedFile(
        "/resolvers/crud/FirstModel/args/index.ts",
      );

      expect(aggregateFirstModelArgsTSFile).toMatchSnapshot(
        "AggregateFirstModelArgs",
      );
      expect(findFirstFirstModelArgsTSFile).toMatchSnapshot(
        "FindFirstFirstModelArgs",
      );
      expect(findManyFirstModelArgsTSFile).toMatchSnapshot(
        "FindManyFirstModelArgs",
      );
      expect(indexTSFile).toMatchSnapshot("index");
    });

    it("should properly generate args classes for sorting by one-to-many relation fields", async () => {
      const schema = /* prisma */ `
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

      await generateCodeFromSchema(schema, {
        outputDirPath,
        previewFeatures: ["orderByRelation"],
      });
      const aggregateSecondModelArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/SecondModel/args/AggregateSecondModelArgs.ts",
      );
      const findFirstSecondModelArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/SecondModel/args/FindFirstSecondModelArgs.ts",
      );
      const findManySecondModelArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/SecondModel/args/FindManySecondModelArgs.ts",
      );
      const indexTSFile = await readGeneratedFile(
        "/resolvers/crud/SecondModel/args/index.ts",
      );

      expect(aggregateSecondModelArgsTSFile).toMatchSnapshot(
        "AggregateSecondModelArgs",
      );
      expect(findFirstSecondModelArgsTSFile).toMatchSnapshot(
        "FindFirstSecondModelArgs",
      );
      expect(findManySecondModelArgsTSFile).toMatchSnapshot(
        "FindManySecondModelArgs",
      );
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });

  describe("when emitTranspiledCode is set to true", () => {
    it("should properly generate imports in js files for resolver classes", async () => {
      const schema = /* prisma */ `
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

  describe("when `orderByAggregateGroup` preview feature is enabled", () => {
    it("should properly generate args classes for group by action using aggregate input", async () => {
      const schema = /* prisma */ `
        model Sample {
          idField       Int     @id @default(autoincrement())
          stringField   String
          floatField    Float
          intField      Int
          booleanField  Boolean
          dateField     DateTime
          jsonField     Json
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        previewFeatures: ["orderByAggregateGroup"],
      });
      const groupBySampleArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Sample/args/GroupBySampleArgs.ts",
      );

      expect(groupBySampleArgsTSFile).toMatchSnapshot("GroupBySampleArgs");
    });
  });
});
