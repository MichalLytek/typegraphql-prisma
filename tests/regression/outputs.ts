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
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

      model Sample {
        intIdField    Int       @id @default(autoincrement())
        stringField   String
        floatField    Float
        booleanField  Boolean
        dateField     DateTime
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const aggregateSampleTSFile = await readGeneratedFile(
      "/resolvers/outputs/AggregateSample.ts",
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
    const batchPayloadTSFile = await readGeneratedFile(
      "/resolvers/outputs/BatchPayload.ts",
    );
    const outputsIndexTSFile = await readGeneratedFile(
      "/resolvers/outputs/index.ts",
    );

    expect(aggregateSampleTSFile).toMatchSnapshot("AggregateSample");
    expect(avgAggregateTSFile).toMatchSnapshot("SampleAvgAggregate");
    expect(sumAggregateTSFile).toMatchSnapshot("SampleSumAggregate");
    expect(minAggregateTSFile).toMatchSnapshot("SampleMinAggregate");
    expect(maxAggregateTSFile).toMatchSnapshot("SampleMaxAggregate");
    expect(batchPayloadTSFile).toMatchSnapshot("BatchPayload");
    expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
  });

  it("should properly generate aggregate classes for renamed model", async () => {
    const schema = /* prisma */ `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

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
    expect(avgAggregateTSFile).toMatchSnapshot("ExampleAvgAggregate");
    expect(sumAggregateTSFile).toMatchSnapshot("ExampleSumAggregate");
    expect(minAggregateTSFile).toMatchSnapshot("ExampleMinAggregate");
    expect(maxAggregateTSFile).toMatchSnapshot("ExampleMaxAggregate");
    expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
  });

  it("should properly generate aggregate classes for model with lowercase name", async () => {
    const schema = /* prisma */ `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

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
    expect(avgAggregateTSFile).toMatchSnapshot("ExampleAvgAggregate");
    expect(sumAggregateTSFile).toMatchSnapshot("ExampleSumAggregate");
    expect(minAggregateTSFile).toMatchSnapshot("ExampleMinAggregate");
    expect(maxAggregateTSFile).toMatchSnapshot("ExampleMaxAggregate");
    expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
  });

  it("should properly generate output type classes when simpleResolvers option is enabled", async () => {
    const schema = /* prisma */ `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

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
    const batchPayloadTSFile = await readGeneratedFile(
      "/resolvers/outputs/BatchPayload.ts",
    );

    expect(aggregateSampleTSFile).toMatchSnapshot("AggregateSample");
    expect(avgAggregateTSFile).toMatchSnapshot("SampleAvgAggregate");
    expect(batchPayloadTSFile).toMatchSnapshot("BatchPayload");
  });

  describe("when experimental feature `groupBy` is enabled", () => {
    it("should generate group by output type for model", async () => {
      const schema = /* prisma */ `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

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
        enabledPreviewFeatures: ["groupBy"],
      });

      const sampleGroupByTSFile = await readGeneratedFile(
        "/resolvers/outputs/SampleGroupBy.ts",
      );
      const outputsIndexTSFile = await readGeneratedFile(
        "/resolvers/outputs/index.ts",
      );

      expect(sampleGroupByTSFile).toMatchSnapshot("SampleGroupBy");
      expect(outputsIndexTSFile).toMatchSnapshot("outputs index");
    });
  });
});
