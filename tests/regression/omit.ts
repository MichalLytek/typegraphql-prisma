import { promises as fs } from "fs";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe("omit-fields", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("regression-omit-fields");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  describe("when model field has `omit(output: true)` set", () => {
    it("should properly generate input type class for prisma model with the omitted field", async () => {
      const schema = /* prisma */ `
        model User {
          id           Int       @id @default(autoincrement())
          dateOfBirth  DateTime
          name         String
          /// @TypeGraphQL.omit(output: true)
          balance      Float?
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const userCreateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserCreateInput.ts",
      );
      const userCreateManyInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserCreateManyInput.ts",
      );
      const userOrderByWithRelationInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserOrderByWithRelationInput.ts",
      );
      const userScalarWhereWithAggregatesInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserScalarWhereWithAggregatesInput.ts",
      );
      const userUpdateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserUpdateInput.ts",
      );
      const userUpdateManyMutationInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserUpdateManyMutationInput.ts",
      );
      const userWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserWhereInput.ts",
      );
      const userWhereUniqueInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserWhereUniqueInput.ts",
      );

      expect(userCreateInputTSFile).toMatchSnapshot("UserCreateInput");
      expect(userCreateManyInputTSFile).toMatchSnapshot("UserCreateManyInput");
      expect(userOrderByWithRelationInputTSFile).toMatchSnapshot(
        "UserOrderByWithRelationInput",
      );
      expect(userScalarWhereWithAggregatesInputTSFile).toMatchSnapshot(
        "UserScalarWhereWithAggregatesInput",
      );
      expect(userUpdateInputTSFile).toMatchSnapshot("UserUpdateInput");
      expect(userUpdateManyMutationInputTSFile).toMatchSnapshot(
        "UserUpdateManyMutationInput",
      );
      expect(userWhereInputTSFile).toMatchSnapshot("UserWhereInput");
      expect(userWhereUniqueInputTSFile).toMatchSnapshot(
        "UserWhereUniqueInput",
      );
    });
  });

  describe("when model field has `omit(input: true)` set", () => {
    it("should properly generate input type class for prisma model without the omitted field", async () => {
      const schema = /* prisma */ `
        model User {
          id           Int       @id @default(autoincrement())
          dateOfBirth  DateTime
          name         String
          /// @TypeGraphQL.omit(input: true)
          balance      Float?
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const userCreateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserCreateInput.ts",
      );
      const userCreateManyInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserCreateManyInput.ts",
      );
      const userOrderByWithRelationInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserOrderByWithRelationInput.ts",
      );
      const userScalarWhereWithAggregatesInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserScalarWhereWithAggregatesInput.ts",
      );
      const userUpdateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserUpdateInput.ts",
      );
      const userUpdateManyMutationInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserUpdateManyMutationInput.ts",
      );
      const userWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserWhereInput.ts",
      );
      const userWhereUniqueInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/UserWhereUniqueInput.ts",
      );

      expect(userCreateInputTSFile).toMatchSnapshot("UserCreateInput");
      expect(userCreateManyInputTSFile).toMatchSnapshot("UserCreateManyInput");
      expect(userOrderByWithRelationInputTSFile).toMatchSnapshot(
        "UserOrderByWithRelationInput",
      );
      expect(userScalarWhereWithAggregatesInputTSFile).toMatchSnapshot(
        "UserScalarWhereWithAggregatesInput",
      );
      expect(userUpdateInputTSFile).toMatchSnapshot("UserUpdateInput");
      expect(userUpdateManyMutationInputTSFile).toMatchSnapshot(
        "UserUpdateManyMutationInput",
      );
      expect(userWhereInputTSFile).toMatchSnapshot("UserWhereInput");
      expect(userWhereUniqueInputTSFile).toMatchSnapshot(
        "UserWhereUniqueInput",
      );
    });
  });

  describe("when model field has omit input create set", () => {
    const schema = /* prisma */ `
      model SampleModel {
        id            Int     @id @default(autoincrement())
        /// @TypeGraphQL.omit(input: ["create"])
        omittedField  String
        normalField   String
      }
    `;

    it("should properly generate create input type classes without that field", async () => {
      await generateCodeFromSchema(schema, { outputDirPath });
      const sampleModelCreateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateInput.ts",
      );
      const sampleModelCreateManyInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateManyInput.ts",
      );

      expect(sampleModelCreateInputTSFile).toMatchSnapshot(
        "SampleModelCreateInput",
      );
      expect(sampleModelCreateManyInputTSFile).toMatchSnapshot(
        "SampleModelCreateManyInput",
      );
    });

    it("should properly generate other input type classes with that field", async () => {
      await generateCodeFromSchema(schema, { outputDirPath });
      const sampleModelWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelWhereInput.ts",
      );
      const sampleModelUpdateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelUpdateInput.ts",
      );
      const sampleModelOrderByWithAggregationInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/SampleModelOrderByWithAggregationInput.ts",
        );

      expect(sampleModelUpdateInputTSFile).toMatchSnapshot(
        "SampleModelUpdateInput",
      );
      expect(sampleModelWhereInputTSFile).toMatchSnapshot(
        "SampleModelWhereInput",
      );
      expect(sampleModelOrderByWithAggregationInputTSFile).toMatchSnapshot(
        "SampleModelOrderByWithAggregationInput",
      );
    });
  });

  describe("when model field has omit input update set", () => {
    const schema = /* prisma */ `
      model SampleModel {
        id            Int     @id @default(autoincrement())
        /// @TypeGraphQL.omit(input: ["update"])
        omittedField  String
        normalField   String
      }
    `;

    it("should properly generate update input type classes without that field", async () => {
      await generateCodeFromSchema(schema, { outputDirPath });
      const sampleModelUpdateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelUpdateInput.ts",
      );
      const sampleModelUpdateManyInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelUpdateManyMutationInput.ts",
      );

      expect(sampleModelUpdateInputTSFile).toMatchSnapshot(
        "SampleModelUpdateInput",
      );
      expect(sampleModelUpdateManyInputTSFile).toMatchSnapshot(
        "SampleModelUpdateManyMutationInput",
      );
    });

    it("should properly generate other input type classes with that field", async () => {
      await generateCodeFromSchema(schema, { outputDirPath });
      const sampleModelWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelWhereInput.ts",
      );
      const sampleModelOrderByWithAggregationInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/SampleModelOrderByWithAggregationInput.ts",
        );
      const sampleModelCreateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateInput.ts",
      );
      const sampleModelCreateManyInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateManyInput.ts",
      );

      expect(sampleModelWhereInputTSFile).toMatchSnapshot(
        "SampleModelWhereInput",
      );
      expect(sampleModelOrderByWithAggregationInputTSFile).toMatchSnapshot(
        "SampleModelOrderByWithAggregationInput",
      );
      expect(sampleModelCreateInputTSFile).toMatchSnapshot(
        "SampleModelCreateInput",
      );
      expect(sampleModelCreateManyInputTSFile).toMatchSnapshot(
        "SampleModelCreateManyInput",
      );
    });
  });

  describe("when model field has omit input where set", () => {
    const schema = /* prisma */ `
      model SampleModel {
        id            Int     @id @default(autoincrement())
        /// @TypeGraphQL.omit(input: ["where"])
        omittedField  String
        normalField   String
      }
    `;

    it("should properly generate where input type classes without that field", async () => {
      await generateCodeFromSchema(schema, { outputDirPath });

      const sampleModelWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelWhereInput.ts",
      );
      expect(sampleModelWhereInputTSFile).toMatchSnapshot(
        "SampleModelWhereInput",
      );
    });

    it("should properly generate other input type classes with that field", async () => {
      await generateCodeFromSchema(schema, { outputDirPath });

      const sampleModelUpdateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelUpdateInput.ts",
      );
      const sampleModelOrderByWithAggregationInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/SampleModelOrderByWithAggregationInput.ts",
        );
      const sampleModelCreateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateInput.ts",
      );
      const sampleModelCreateManyInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateManyInput.ts",
      );
      expect(sampleModelUpdateInputTSFile).toMatchSnapshot(
        "SampleModelUpdateInput",
      );
      expect(sampleModelOrderByWithAggregationInputTSFile).toMatchSnapshot(
        "SampleModelOrderByWithAggregationInput",
      );

      expect(sampleModelCreateInputTSFile).toMatchSnapshot(
        "SampleModelCreateInput",
      );
      expect(sampleModelCreateManyInputTSFile).toMatchSnapshot(
        "SampleModelCreateManyInput",
      );
    });
  });

  describe("when model field has omit input orderBy set", () => {
    const schema = /* prisma */ `
      model SampleModel {
        id            Int     @id @default(autoincrement())
        /// @TypeGraphQL.omit(input: ["orderBy"])
        omittedField  String
        normalField   String
      }
    `;

    it("should properly generate orderBy input type classes without that field", async () => {
      await generateCodeFromSchema(schema, { outputDirPath });

      const sampleModelOrderByWithAggregationInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/SampleModelOrderByWithAggregationInput.ts",
        );
      expect(sampleModelOrderByWithAggregationInputTSFile).toMatchSnapshot(
        "SampleModelOrderByWithAggregationInput",
      );
    });

    it("should properly generate other input type classes with that field", async () => {
      await generateCodeFromSchema(schema, { outputDirPath });
      const sampleModelCreateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateInput.ts",
      );
      const sampleModelCreateManyInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateManyInput.ts",
      );
      const sampleModelWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelWhereInput.ts",
      );
      const sampleModelUpdateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelUpdateInput.ts",
      );

      expect(sampleModelUpdateInputTSFile).toMatchSnapshot(
        "SampleModelUpdateInput",
      );
      expect(sampleModelWhereInputTSFile).toMatchSnapshot(
        "SampleModelWhereInput",
      );
      expect(sampleModelCreateInputTSFile).toMatchSnapshot(
        "SampleModelCreateInput",
      );
      expect(sampleModelCreateManyInputTSFile).toMatchSnapshot(
        "SampleModelCreateManyInput",
      );
    });
  });

  describe("when model field has both create and update omit input set", () => {
    const schema = /* prisma */ `
      model SampleModel {
        id            Int     @id @default(autoincrement())
        /// @TypeGraphQL.omit(input: ["create", "update"])
        omittedField  String
        normalField   String
      }
    `;

    it("should properly generate create and update input type classes without that field", async () => {
      await generateCodeFromSchema(schema, { outputDirPath });
      const sampleModelCreateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateInput.ts",
      );
      const sampleModelCreateManyInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateManyInput.ts",
      );
      const sampleModelUpdateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelUpdateInput.ts",
      );

      expect(sampleModelCreateInputTSFile).toMatchSnapshot(
        "SampleModelCreateInput",
      );
      expect(sampleModelCreateManyInputTSFile).toMatchSnapshot(
        "SampleModelCreateManyInput",
      );
      expect(sampleModelUpdateInputTSFile).toMatchSnapshot(
        "SampleModelUpdateInput",
      );
    });

    it("should properly generate other input type classes with that field", async () => {
      await generateCodeFromSchema(schema, { outputDirPath });
      const sampleModelWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleModelWhereInput.ts",
      );

      const sampleModelOrderByWithAggregationInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/SampleModelOrderByWithAggregationInput.ts",
        );

      expect(sampleModelWhereInputTSFile).toMatchSnapshot(
        "SampleModelWhereInput",
      );
      expect(sampleModelOrderByWithAggregationInputTSFile).toMatchSnapshot(
        "SampleModelOrderByWithAggregationInput",
      );
    });
  });
});
