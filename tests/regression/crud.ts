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
    const findUniqueUserOrThrowResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/FindUniqueUserOrThrowResolver.ts",
    );

    expect(userCrudResolverTSFile).toMatchSnapshot("UserCrudResolver");
    expect(findUniqueUserResolverTSFile).toMatchSnapshot(
      "FindUniqueUserResolver",
    );
    expect(findUniqueUserOrThrowResolverTSFile).toMatchSnapshot(
      "FindUniqueUserOrThrowResolver",
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

  it("should properly generate resolver class when cannot pluralize model name and provided overriding plural", async () => {
    const schema = /* prisma */ `
      /// @@TypeGraphQL.type(plural: "StaffMembers")
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
    const createOneUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/CreateOneUserArgs.ts",
    );
    const deleteManyUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/DeleteManyUserArgs.ts",
    );
    const deleteOneUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/DeleteOneUserArgs.ts",
    );
    const findManyUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/FindManyUserArgs.ts",
    );
    const findFirstUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/FindFirstUserArgs.ts",
    );
    const findFirstUserOrThrowArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/FindFirstUserOrThrowArgs.ts",
    );
    const findUniqueUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/FindUniqueUserArgs.ts",
    );
    const findUniqueUserOrThrowArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/FindUniqueUserOrThrowArgs.ts",
    );
    const updateManyUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/UpdateManyUserArgs.ts",
    );
    const updateOneUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/UpdateOneUserArgs.ts",
    );
    const upsertOneUserArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/User/args/UpsertOneUserArgs.ts",
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
    expect(createOneUserArgsTSFile).toMatchSnapshot("CreateOneUserArgs");
    expect(deleteManyUserArgsTSFile).toMatchSnapshot("DeleteManyUserArgs");
    expect(deleteOneUserArgsTSFile).toMatchSnapshot("DeleteOneUserArgs");
    expect(findManyUserArgsTSFile).toMatchSnapshot("FindManyUserArgs");
    expect(findFirstUserArgsTSFile).toMatchSnapshot("FindFirstUserArgs");
    expect(findFirstUserOrThrowArgsTSFile).toMatchSnapshot(
      "FindFirstUserOrThrowArgs",
    );
    expect(findUniqueUserArgsTSFile).toMatchSnapshot("FindUniqueUserArgs");
    expect(findUniqueUserOrThrowArgsTSFile).toMatchSnapshot(
      "FindUniqueUserOrThrowArgs",
    );
    expect(updateManyUserArgsTSFile).toMatchSnapshot("UpdateManyUserArgs");
    expect(updateOneUserArgsTSFile).toMatchSnapshot("UpdateOneUserArgs");
    expect(upsertOneUserArgsTSFile).toMatchSnapshot("UpsertOneUserArgs");
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
    const createOneUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/CreateOneUserResolver.ts",
    );
    const deleteManyUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/DeleteManyUserResolver.ts",
    );
    const deleteOneUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/DeleteOneUserResolver.ts",
    );
    const findManyUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/FindManyUserResolver.ts",
    );
    const findFirstUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/FindFirstUserResolver.ts",
    );
    const findFirstUserOrThrowResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/FindFirstUserOrThrowResolver.ts",
    );
    const findUniqueUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/FindUniqueUserResolver.ts",
    );
    const findUniqueUserOrThrowResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/FindUniqueUserOrThrowResolver.ts",
    );
    const updateManyUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/UpdateManyUserResolver.ts",
    );
    const updateOneUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/UpdateOneUserResolver.ts",
    );
    const upsertOneUserResolverTSFile = await readGeneratedFile(
      "/resolvers/crud/User/UpsertOneUserResolver.ts",
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

    expect(createOneUserResolverTSFile).toMatchSnapshot(
      "CreateOneUserResolver",
    );
    expect(deleteManyUserResolverTSFile).toMatchSnapshot(
      "DeleteManyUserResolver",
    );
    expect(deleteOneUserResolverTSFile).toMatchSnapshot(
      "DeleteOneUserResolver",
    );
    expect(findManyUserResolverTSFile).toMatchSnapshot("FindManyUserResolver");
    expect(findFirstUserResolverTSFile).toMatchSnapshot(
      "FindFirstUserResolver",
    );
    expect(findFirstUserOrThrowResolverTSFile).toMatchSnapshot(
      "FindFirstUserOrThrowResolver",
    );
    expect(findUniqueUserResolverTSFile).toMatchSnapshot(
      "FindUniqueUserResolver",
    );
    expect(findUniqueUserOrThrowResolverTSFile).toMatchSnapshot(
      "FindUniqueUserOrThrowResolver",
    );
    expect(updateManyUserResolverTSFile).toMatchSnapshot(
      "UpdateManyUserResolver",
    );
    expect(updateOneUserResolverTSFile).toMatchSnapshot(
      "UpdateOneUserResolver",
    );
    expect(upsertOneUserResolverTSFile).toMatchSnapshot(
      "UpsertOneUserResolver",
    );
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
      const createOneClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/CreateOneClientArgs.ts",
      );
      const deleteManyClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/DeleteManyClientArgs.ts",
      );
      const deleteOneClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/DeleteOneClientArgs.ts",
      );
      const findManyClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/FindManyClientArgs.ts",
      );
      const findFirstClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/FindFirstClientArgs.ts",
      );
      const findFirstClientOrThrowArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/FindFirstClientOrThrowArgs.ts",
      );
      const findUniqueClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/FindUniqueClientArgs.ts",
      );
      const findUniqueClientOrThrowArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/FindUniqueClientOrThrowArgs.ts",
      );
      const updateManyClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/UpdateManyClientArgs.ts",
      );
      const updateOneClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/UpdateOneClientArgs.ts",
      );
      const upsertOneClientArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/args/UpsertOneClientArgs.ts",
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
      expect(createOneClientArgsTSFile).toMatchSnapshot("CreateClientArgs");
      expect(deleteManyClientArgsTSFile).toMatchSnapshot(
        "DeleteManyClientArgs",
      );
      expect(deleteOneClientArgsTSFile).toMatchSnapshot("DeleteClientArgs");
      expect(findManyClientArgsTSFile).toMatchSnapshot("FindManyClientArgs");
      expect(findFirstClientArgsTSFile).toMatchSnapshot("FindFirstClientArgs");
      expect(findUniqueClientArgsTSFile).toMatchSnapshot(
        "FindUniqueClientArgs",
      );
      expect(updateManyClientArgsTSFile).toMatchSnapshot(
        "UpdateManyClientArgs",
      );
      expect(updateOneClientArgsTSFile).toMatchSnapshot("UpdateClientArgs");
      expect(upsertOneClientArgsTSFile).toMatchSnapshot("UpsertClientArgs");
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
      const createOneClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/CreateOneClientResolver.ts",
      );
      const deleteManyClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/DeleteManyClientResolver.ts",
      );
      const deleteOneClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/DeleteOneClientResolver.ts",
      );
      const findManyClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/FindManyClientResolver.ts",
      );
      const findFirstClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/FindFirstClientResolver.ts",
      );
      const findFirstClientOrThrowResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/FindFirstClientOrThrowResolver.ts",
      );
      const findUniqueClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/FindUniqueClientResolver.ts",
      );
      const findUniqueClientOrThrowResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/FindUniqueClientOrThrowResolver.ts",
      );
      const updateManyClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/UpdateManyClientResolver.ts",
      );
      const updateOneClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/UpdateOneClientResolver.ts",
      );
      const upsertOneClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/UpsertOneClientResolver.ts",
      );
      const groupByClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/GroupByClientResolver.ts",
      );
      const aggregateClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/AggregateClientResolver.ts",
      );
      const createManyClientResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/Client/CreateManyClientResolver.ts",
      );

      expect(createOneClientResolverTSFile).toMatchSnapshot(
        "CreateOneClientResolver",
      );
      expect(deleteManyClientResolverTSFile).toMatchSnapshot(
        "DeleteManyClientResolver",
      );
      expect(deleteOneClientResolverTSFile).toMatchSnapshot(
        "DeleteOneClientResolver",
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
      expect(updateOneClientResolverTSFile).toMatchSnapshot(
        "UpdateOneClientResolver",
      );
      expect(upsertOneClientResolverTSFile).toMatchSnapshot(
        "UpsertOneClientResolver",
      );
      expect(groupByClientResolverTSFile).toMatchSnapshot(
        "GroupByClientResolver",
      );
      expect(aggregateClientResolverTSFile).toMatchSnapshot(
        "AggregateClientResolver",
      );
      expect(createManyClientResolverTSFile).toMatchSnapshot(
        "CreateManyClientResolver",
      );
    });

    it("should properly generate resolver class for single prisma model", async () => {
      const schema = /* prisma */ `
        /// @@TypeGraphQL.type(name: "MainUser")
        model User {
          intIdField          Int     @id @default(autoincrement())
          uniqueStringField   String  @unique
          optionalStringField String?
          dateField           DateTime
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const mainUserCrudResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/MainUser/MainUserCrudResolver.ts",
      );
      const aggregateMainUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/MainUser/AggregateMainUserResolver.ts",
      );
      const groupByMainUserResolverTSFile = await readGeneratedFile(
        "/resolvers/crud/MainUser/GroupByMainUserResolver.ts",
      );

      expect(mainUserCrudResolverTSFile).toMatchSnapshot(
        "MainUserCrudResolver",
      );
      expect(aggregateMainUserResolverTSFile).toMatchSnapshot(
        "AggregateMainUserResolver",
      );
      expect(groupByMainUserResolverTSFile).toMatchSnapshot(
        "GroupByMainUserResolver",
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
      const createOneUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/CreateOneUserArgs.ts",
      );
      const updateManyUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/UpdateManyUserArgs.ts",
      );
      const updateOneUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/UpdateOneUserArgs.ts",
      );
      const upsertOneUserArgsTSFile = await readGeneratedFile(
        "/resolvers/crud/User/args/UpsertOneUserArgs.ts",
      );

      expect(createOneUserArgsTSFile).toMatchSnapshot("CreateOneUserArgs");
      expect(updateManyUserArgsTSFile).toMatchSnapshot("UpdateManyUserArgs");
      expect(updateOneUserArgsTSFile).toMatchSnapshot("UpdateOneUserArgs");
      expect(upsertOneUserArgsTSFile).toMatchSnapshot("UpsertOneUserArgs");
    });
  });

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

    await generateCodeFromSchema(schema, { outputDirPath });
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

    await generateCodeFromSchema(schema, { outputDirPath });
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

    await generateCodeFromSchema(schema, { outputDirPath });
    const groupBySampleArgsTSFile = await readGeneratedFile(
      "/resolvers/crud/Sample/args/GroupBySampleArgs.ts",
    );

    expect(groupBySampleArgsTSFile).toMatchSnapshot("GroupBySampleArgs");
  });
});
