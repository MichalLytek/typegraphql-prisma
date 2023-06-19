import { promises as fs } from "fs";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe("outputs", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("regression-outputs");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  it("should properly generate output type classes", async () => {
    const schema = /* prisma */ `
      model Sample {
        intIdField     Int       @id @default(autoincrement())
        stringField    String
        floatField     Float
        booleanField   Boolean
        dateField      DateTime
        intArrayField  Int[]
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const aggregateSampleTSFile = await readGeneratedFile(
      "/resolvers/outputs/AggregateSample.ts",
    );
    const countAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleCountAggregate.ts",
    );
    const avgAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleAvgAggregate.ts",
    );
    const sumAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleSumAggregate.ts",
    );
    const minAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleMinAggregate.ts",
    );
    const maxAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleMaxAggregate.ts",
    );
    const affectedRowsOutputTSFile = await readGeneratedFile(
      "/resolvers/outputs/AffectedRowsOutput.ts",
    );
    const sampleGroupByTSFile = await readGeneratedFile(
      "/resolvers/outputs/SampleGroupBy.ts",
    );
    const outputsIndexTSFile = await readGeneratedFile(
      "/resolvers/outputs/index.ts",
    );

    expect(aggregateSampleTSFile).toMatchSnapshot("AggregateSample");
    expect(countAggregateTSFile).toMatchSnapshot("SampleCountAggregate");
    expect(avgAggregateTSFile).toMatchSnapshot("SampleAvgAggregate");
    expect(sumAggregateTSFile).toMatchSnapshot("SampleSumAggregate");
    expect(minAggregateTSFile).toMatchSnapshot("SampleMinAggregate");
    expect(maxAggregateTSFile).toMatchSnapshot("SampleMaxAggregate");
    expect(affectedRowsOutputTSFile).toMatchSnapshot("AffectedRowsOutput");
    expect(sampleGroupByTSFile).toMatchSnapshot("SampleGroupBy");
    expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
  });

  it("should properly generate aggregate classes for renamed model", async () => {
    const schema = /* prisma */ `
      /// @@TypeGraphQL.type(name: "Example")
      model Sample {
        intIdField    Int       @id @default(autoincrement())
        stringField   String
        floatField    Float
        booleanField  Boolean
        dateField     DateTime
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const aggregateExampleTSFile = await readGeneratedFile(
      "/resolvers/outputs/AggregateExample.ts",
    );
    const countAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleCountAggregate.ts",
    );
    const avgAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleAvgAggregate.ts",
    );
    const sumAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleSumAggregate.ts",
    );
    const minAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleMinAggregate.ts",
    );
    const maxAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleMaxAggregate.ts",
    );
    const outputsIndexTSFile = await readGeneratedFile(
      "/resolvers/outputs/index.ts",
    );

    expect(aggregateExampleTSFile).toMatchSnapshot("AggregateExample");
    expect(countAggregateTSFile).toMatchSnapshot("ExampleCountAggregate");
    expect(avgAggregateTSFile).toMatchSnapshot("ExampleAvgAggregate");
    expect(sumAggregateTSFile).toMatchSnapshot("ExampleSumAggregate");
    expect(minAggregateTSFile).toMatchSnapshot("ExampleMinAggregate");
    expect(maxAggregateTSFile).toMatchSnapshot("ExampleMaxAggregate");
    expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
  });

  it("should properly generate aggregate classes for model with lowercase name", async () => {
    const schema = /* prisma */ `
      model example {
        intIdField    Int       @id @default(autoincrement())
        stringField   String
        floatField    Float
        booleanField  Boolean
        dateField     DateTime
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const aggregateExampleTSFile = await readGeneratedFile(
      "/resolvers/outputs/AggregateExample.ts",
    );
    const countAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleCountAggregate.ts",
    );
    const avgAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleAvgAggregate.ts",
    );
    const sumAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleSumAggregate.ts",
    );
    const minAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleMinAggregate.ts",
    );
    const maxAggregateTSFile = await readGeneratedFile(
      "/resolvers/outputs/ExampleMaxAggregate.ts",
    );
    const outputsIndexTSFile = await readGeneratedFile(
      "/resolvers/outputs/index.ts",
    );

    expect(aggregateExampleTSFile).toMatchSnapshot("AggregateExample");
    expect(countAggregateTSFile).toMatchSnapshot("ExampleCountAggregate");
    expect(avgAggregateTSFile).toMatchSnapshot("ExampleAvgAggregate");
    expect(sumAggregateTSFile).toMatchSnapshot("ExampleSumAggregate");
    expect(minAggregateTSFile).toMatchSnapshot("ExampleMinAggregate");
    expect(maxAggregateTSFile).toMatchSnapshot("ExampleMaxAggregate");
    expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
  });

  it("should properly generate count classes for relation fields", async () => {
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
    const firstModelCountTSFile = await readGeneratedFile(
      "/resolvers/outputs/FirstModelCount.ts",
    );
    const outputsIndexTSFile = await readGeneratedFile(
      "/resolvers/outputs/index.ts",
    );

    expect(firstModelCountTSFile).toMatchSnapshot("FirstModelCount");
    expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
  });

  describe("when simpleResolvers option is enabled", () => {
    it("should properly generate output type classes", async () => {
      const schema = /* prisma */ `
        model Sample {
          intIdField    Int       @id @default(autoincrement())
          stringField   String
          floatField    Float
          booleanField  Boolean
          dateField     DateTime
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        simpleResolvers: true,
      });
      const aggregateSampleTSFile = await readGeneratedFile(
        "/resolvers/outputs/AggregateSample.ts",
      );
      const avgAggregateTSFile = await readGeneratedFile(
        "/resolvers/outputs/SampleAvgAggregate.ts",
      );
      const affectedRowsOutputTSFile = await readGeneratedFile(
        "/resolvers/outputs/AffectedRowsOutput.ts",
      );

      expect(aggregateSampleTSFile).toMatchSnapshot("AggregateSample");
      expect(avgAggregateTSFile).toMatchSnapshot("SampleAvgAggregate");
      expect(affectedRowsOutputTSFile).toMatchSnapshot("AffectedRowsOutput");
    });
  });

  describe("when customPrismaImportPath option is set", () => {
    it("should properly generate output type classes", async () => {
      const schema = /* prisma */ `
        model Sample {
          intIdField    Int       @id @default(autoincrement())
          stringField   String
          floatField    Float
          booleanField  Boolean
          dateField     DateTime
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        customPrismaImportPath: "../test/import",
      });
      const aggregateSampleTSFile = await readGeneratedFile(
        "/resolvers/outputs/AggregateSample.ts",
      );

      expect(aggregateSampleTSFile).toMatchSnapshot("AggregateSample");
    });
  });

  describe("when filteredRelationCount preview feature is enabled", () => {
    it("should properly generate count classes for relation fields with args", async () => {
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
        previewFeatures: ["filteredRelationCount"],
      });
      const firstModelCountTSFile = await readGeneratedFile(
        "/resolvers/outputs/FirstModelCount.ts",
      );
      const outputsIndexTSFile = await readGeneratedFile(
        "/resolvers/outputs/index.ts",
      );

      expect(firstModelCountTSFile).toMatchSnapshot("FirstModelCount");
      expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
    });
  });

  describe("when `emitIsAbstract` generator option is enabled", () => {
    it("should properly generate count object type class decorator options", async () => {
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
        emitIsAbstract: true,
      });
      const firstModelCountTSFile = await readGeneratedFile(
        "/resolvers/outputs/FirstModelCount.ts",
      );

      expect(firstModelCountTSFile).toMatchSnapshot("FirstModelCount");
    });
  });
});
