import { promises as fs } from "fs";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe("inputs", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("regression-inputs");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  it("should properly generate input type classes for filtering scalar fields", async () => {
    const schema = /* prisma */ `
      model SampleModel {
        intIdField            Int     @id @default(autoincrement())
        stringField           String  @unique
        optionalStringField   String?
        intField              Int
        optionalIntField      Int?
        floatField            Float
        optionalFloatField    Float?
        booleanField          Boolean
        optionalBooleanField  Boolean?
        dateField             DateTime
        optionalDateField     DateTime?
        jsonField             Json
        optionalJsonField     Json?
        intArrayField         Int[]
        stringArrayField      String[]
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const intFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/IntFilter.ts",
    );
    const intNullableListFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/IntNullableListFilter.ts",
    );
    const nestedIntFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedIntFilter.ts",
    );
    const stringFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/StringFilter.ts",
    );
    const stringNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/StringNullableFilter.ts",
    );
    const stringNullableListFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/StringNullableListFilter.ts",
    );
    const nestedStringNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedStringNullableFilter.ts",
    );
    const floatFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/FloatFilter.ts",
    );
    const nestedFloatFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedFloatFilter.ts",
    );
    const boolFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BoolFilter.ts",
    );
    const nestedBoolFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedBoolFilter.ts",
    );
    const dateTimeFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/DateTimeFilter.ts",
    );
    const nestedDateTimeFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedDateTimeFilter.ts",
    );
    const jsonFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/JsonFilter.ts",
    );
    const nestedJsonFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedJsonFilter.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(intFilterTSFile).toMatchSnapshot("IntFilter");
    expect(intNullableListFilterTSFile).toMatchSnapshot(
      "IntNullableListFilter",
    );
    expect(nestedIntFilterTSFile).toMatchSnapshot("NestedIntFilter");
    expect(stringFilterTSFile).toMatchSnapshot("StringFilter");
    expect(stringNullableFilterTSFile).toMatchSnapshot("StringNullableFilter");
    expect(stringNullableListFilterTSFile).toMatchSnapshot(
      "StringNullableListFilter",
    );
    expect(nestedStringNullableFilterTSFile).toMatchSnapshot(
      "NestedStringNullableFilter",
    );
    expect(floatFilterTSFile).toMatchSnapshot("FloatFilter");
    expect(nestedFloatFilterTSFile).toMatchSnapshot("NestedFloatFilter");
    expect(boolFilterTSFile).toMatchSnapshot("BoolFilter");
    expect(nestedBoolFilterTSFile).toMatchSnapshot("NestedBoolFilter");
    expect(dateTimeFilterTSFile).toMatchSnapshot("DateTimeFilter");
    expect(nestedDateTimeFilterTSFile).toMatchSnapshot("NestedDateTimeFilter");
    expect(jsonFilterTSFile).toMatchSnapshot("JsonFilter");
    expect(nestedJsonFilterTSFile).toMatchSnapshot("NestedJsonFilter");
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for creating models and scalar fields", async () => {
    const schema = /* prisma */ `
      enum Color {
        RED
        GREEN
        BLUE
      }
      model SampleModel {
        intIdField            Int     @id @default(autoincrement())
        stringField           String  @unique
        optionalStringField   String?
        intField              Int
        optionalIntField      Int?
        floatField            Float
        optionalFloatField    Float?
        booleanField          Boolean
        optionalBooleanField  Boolean?
        dateField             DateTime
        optionalDateField     DateTime?
        jsonField             Json
        optionalJsonField     Json?
        enumField             Color
        optionalEnumField     Color?
        intArrayField         Int[]
        stringArrayField      String[]
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const sampleModelCreateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelCreateInput.ts",
    );
    const sampleModelCreateManyInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelCreateManyInput.ts",
    );
    const sampleModelCreateintArrayFieldInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelCreateintArrayFieldInput.ts",
    );
    const sampleModelCreateManyintArrayFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateManyintArrayFieldInput.ts",
      );
    const sampleModelCreatestringArrayFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreatestringArrayFieldInput.ts",
      );
    const sampleModelCreateManystringArrayFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SampleModelCreateManystringArrayFieldInput.ts",
      );

    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(sampleModelCreateInputTSFile).toMatchSnapshot(
      "SampleModelCreateInput",
    );
    expect(sampleModelCreateManyInputTSFile).toMatchSnapshot(
      "SampleModelCreateManyInput",
    );
    expect(sampleModelCreateintArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelCreateintArrayFieldInput",
    );
    expect(sampleModelCreateManyintArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelCreateManyintArrayFieldInput",
    );
    expect(sampleModelCreatestringArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelCreatestringArrayFieldInput",
    );
    expect(sampleModelCreateManystringArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelCreateManystringArrayFieldInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for updating scalar fields", async () => {
    const schema = /* prisma */ `
      enum Color {
        RED
        GREEN
        BLUE
      }
      model SampleModel {
        intIdField            Int     @id @default(autoincrement())
        stringField           String  @unique
        optionalStringField   String?
        intField              Int
        optionalIntField      Int?
        floatField            Float
        optionalFloatField    Float?
        booleanField          Boolean
        optionalBooleanField  Boolean?
        dateField             DateTime
        optionalDateField     DateTime?
        jsonField             Json
        optionalJsonField     Json?
        enumField             Color
        optionalEnumField     Color?
        intArrayField         Int[]
        stringArrayField      String[]
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const sampleModelUpdateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelUpdateInput.ts",
    );
    const sampleModelUpdateManyMutationInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelUpdateManyMutationInput.ts",
    );
    const boolFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/BoolFieldUpdateOperationsInput.ts",
    );
    const dateTimeFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/DateTimeFieldUpdateOperationsInput.ts",
    );
    const floatFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FloatFieldUpdateOperationsInput.ts",
    );
    const intFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/IntFieldUpdateOperationsInput.ts",
    );
    const stringFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/StringFieldUpdateOperationsInput.ts",
    );
    const enumColorFieldUpdateOperationsInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/EnumColorFieldUpdateOperationsInput.ts",
    );
    const sampleModelUpdateintArrayFieldInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelUpdateintArrayFieldInput.ts",
    );
    const sampleModelUpdatestringArrayFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SampleModelUpdatestringArrayFieldInput.ts",
      );

    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(sampleModelUpdateInputTSFile).toMatchSnapshot(
      "SampleModelUpdateInput",
    );
    expect(sampleModelUpdateManyMutationInputTSFile).toMatchSnapshot(
      "SampleModelUpdateManyMutationInput",
    );
    expect(boolFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "BoolFieldUpdateOperationsInput",
    );
    expect(dateTimeFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "DateTimeFieldUpdateOperationsInput",
    );
    expect(floatFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "FloatFieldUpdateOperationsInput",
    );
    expect(intFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "IntFieldUpdateOperationsInput",
    );
    expect(stringFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "StringFieldUpdateOperationsInput",
    );
    expect(enumColorFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "EnumColorFieldUpdateOperationsInput",
    );
    expect(sampleModelUpdateintArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelUpdateintArrayFieldInput",
    );
    expect(sampleModelUpdatestringArrayFieldInputTSFile).toMatchSnapshot(
      "SampleModelUpdatestringArrayFieldInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for filtering models by fields", async () => {
    const schema = /* prisma */ `
      model SampleModel {
        intIdField          Int     @id @default(autoincrement())
        stringField         String  @unique
        optionalStringField String?
        intField            Int
        floatField          Float
        booleanField        Boolean
        dateField           DateTime
        jsonField           Json
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const sampleModelWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelWhereInput.ts",
    );
    const sampleModelWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleModelWhereUniqueInput.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(sampleModelWhereInputTSFile).toMatchSnapshot(
      "SampleModelWhereInput",
    );
    expect(sampleModelWhereUniqueInputTSFile).toMatchSnapshot(
      "SampleModelWhereUniqueInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for filtering models by many to many relation fields", async () => {
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
    const firstModelWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelWhereInput.ts",
    );
    const firstModelWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelWhereUniqueInput.ts",
    );
    const firstModelScalarWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelScalarWhereInput.ts",
    );
    const firstModelOrderByWithRelationInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelOrderByWithRelationInput.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(firstModelWhereInputTSFile).toMatchSnapshot("FirstModelWhereInput");
    expect(firstModelWhereUniqueInputTSFile).toMatchSnapshot(
      "FirstModelWhereUniqueInput",
    );
    expect(firstModelScalarWhereInputTSFile).toMatchSnapshot(
      "FirstModelScalarWhereInput",
    );
    expect(firstModelOrderByWithRelationInputTSFile).toMatchSnapshot(
      "FirstModelOrderByWithRelationInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for filtering models by one to many relation fields", async () => {
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
    const firstModelWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelWhereInput.ts",
    );
    const firstModelWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelWhereUniqueInput.ts",
    );
    const firstModelOrderByWithRelationInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelOrderByWithRelationInput.ts",
    );
    const firstModelRelationFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelRelationFilter.ts",
    );
    const secondModelWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelWhereInput.ts",
    );
    const secondModelWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelWhereUniqueInput.ts",
    );
    const secondModelScalarWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelScalarWhereInput.ts",
    );
    const secondModelOrderByWithRelationInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelOrderByWithRelationInput.ts",
    );
    const secondModelListRelationFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelListRelationFilter.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(firstModelWhereInputTSFile).toMatchSnapshot("FirstModelWhereInput");
    expect(firstModelWhereUniqueInputTSFile).toMatchSnapshot(
      "FirstModelWhereUniqueInput",
    );
    expect(firstModelOrderByWithRelationInputTSFile).toMatchSnapshot(
      "FirstModelOrderByWithRelationInput",
    );
    expect(firstModelRelationFilterTSFile).toMatchSnapshot(
      "FirstModelRelationFilter",
    );
    expect(secondModelWhereInputTSFile).toMatchSnapshot(
      "SecondModelWhereInput",
    );
    expect(secondModelWhereUniqueInputTSFile).toMatchSnapshot(
      "SecondModelWhereUniqueInput",
    );
    expect(secondModelScalarWhereInputTSFile).toMatchSnapshot(
      "SecondModelScalarWhereInput",
    );
    expect(secondModelOrderByWithRelationInputTSFile).toMatchSnapshot(
      "SecondModelOrderByWithRelationInput",
    );
    expect(secondModelListRelationFilterTSFile).toMatchSnapshot(
      "SecondModelListRelationFilter",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type class for filtering by enums values", async () => {
    const schema = /* prisma */ `
      enum Color {
        RED
        GREEN
        BLUE
      }

      model SampleModel {
        idField    Int    @id @default(autoincrement())
        enumField  Color
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const enumColorFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/EnumColorFilter.ts",
    );
    const nestedEnumColorFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedEnumColorFilter.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(enumColorFilterTSFile).toMatchSnapshot("EnumColorFilter");
    expect(nestedEnumColorFilterTSFile).toMatchSnapshot(
      "NestedEnumColorFilter",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for model with composite unique index", async () => {
    const schema = /* prisma */ `
      model Movie {
        directorFirstName String
        directorLastName  String
        director          Director @relation(fields: [directorFirstName, directorLastName], references: [firstName, lastName])
        title             String
        rating            Float

        @@id([directorFirstName, directorLastName, title])
      }

      model Director {
        firstName String
        lastName  String
        age       Int
        movies    Movie[]

        @@id([firstName, lastName])
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const directorWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/DirectorWhereInput.ts",
    );
    const directorWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/DirectorWhereUniqueInput.ts",
    );
    const directorOrderByWithRelationInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/DirectorOrderByWithRelationInput.ts",
    );
    const directorFirstNameLastNameCompoundUniqueInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/DirectorFirstNameLastNameCompoundUniqueInput.ts",
      );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(directorWhereInputTSFile).toMatchSnapshot("DirectorWhereInput");
    expect(directorWhereUniqueInputTSFile).toMatchSnapshot(
      "DirectorWhereUniqueInput",
    );
    expect(directorOrderByWithRelationInputTSFile).toMatchSnapshot(
      "DirectorOrderByWithRelationInput",
    );
    expect(directorFirstNameLastNameCompoundUniqueInputTSFile).toMatchSnapshot(
      "DirectorFirstNameLastNameCompoundUniqueInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for model with id keys with relation", async () => {
    const schema = /* prisma */ `
      model Movie {
        directorFirstName String
        directorLastName  String
        director          Director @relation(fields: [directorFirstName, directorLastName], references: [firstName, lastName])
        title             String
        rating            Float

        @@id([directorFirstName, directorLastName, title])
      }

      model Director {
        firstName String
        lastName  String
        age       Int
        movies    Movie[]

        @@id([firstName, lastName])
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const movieWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/MovieWhereInput.ts",
    );
    const movieWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/MovieWhereUniqueInput.ts",
    );
    const movieScalarWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/MovieScalarWhereInput.ts",
    );
    const movieOrderByWithRelationInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/MovieOrderByWithRelationInput.ts",
    );
    const movieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput.ts",
      );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(movieWhereInputTSFile).toMatchSnapshot("MovieWhereInput");
    expect(movieWhereUniqueInputTSFile).toMatchSnapshot(
      "MovieWhereUniqueInput",
    );
    expect(movieScalarWhereInputTSFile).toMatchSnapshot(
      "MovieScalarWhereInput",
    );
    expect(movieOrderByWithRelationInputTSFile).toMatchSnapshot(
      "MovieOrderByWithRelationInput",
    );
    expect(
      movieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInputTSFile,
    ).toMatchSnapshot(
      "MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for connectOrCreate", async () => {
    const schema = /* prisma */ `
      model User {
        id          Int     @id @default(autoincrement())
        name        String
        postsField  Post[]
      }
      model Post {
        id        Int     @id @default(autoincrement())
        title     String
        authorId  Int
        author    User    @relation(fields: [authorId], references: [id])
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const userUpdateOneRequiredWithoutPostsFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/UserUpdateOneRequiredWithoutPostsFieldInput.ts",
      );
    const userCreateOrConnectWithoutPostsFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/UserCreateOrConnectWithoutPostsFieldInput.ts",
      );
    const userCreateNestedOneWithoutPostsFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/UserCreateNestedOneWithoutPostsFieldInput.ts",
      );

    expect(userUpdateOneRequiredWithoutPostsFieldInputTSFile).toMatchSnapshot(
      "UserUpdateOneRequiredWithoutPostsFieldInput",
    );
    expect(userCreateOrConnectWithoutPostsFieldInputTSFile).toMatchSnapshot(
      "UserCreateOrConnectWithoutPostsFieldInput",
    );
    expect(userCreateNestedOneWithoutPostsFieldInputTSFile).toMatchSnapshot(
      "UserCreateNestedOneWithoutPostsFieldInput",
    );
  });

  it("should properly generate input type scalar filters classes for model with native types", async () => {
    const schema = /* prisma */ `
      model NativeTypeModel {
        id      Int      @id @default(autoincrement()) @db.Integer
        bigInt  BigInt?  @db.BigInt
        byteA   Bytes?   @db.ByteA
        decimal Decimal? @db.Decimal
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const bigIntNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BigIntNullableFilter.ts",
    );
    const bigIntNullableWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BigIntNullableWithAggregatesFilter.ts",
    );
    const bytesNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BytesNullableFilter.ts",
    );
    const bytesNullableWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BytesNullableWithAggregatesFilter.ts",
    );
    const decimalNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/DecimalNullableFilter.ts",
    );
    const decimalNullableWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/DecimalNullableWithAggregatesFilter.ts",
    );
    const nestedBytesNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedBytesNullableFilter.ts",
    );
    const nestedBytesNullableWithAggregatesFilterTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NestedBytesNullableWithAggregatesFilter.ts",
      );
    const nestedDecimalNullableFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/NestedDecimalNullableFilter.ts",
    );
    const nestedDecimalNullableWithAggregatesFilterTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NestedDecimalNullableWithAggregatesFilter.ts",
      );
    const nullableBigIntFieldUpdateOperationsInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NullableBigIntFieldUpdateOperationsInput.ts",
      );
    const nullableBytesFieldUpdateOperationsInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NullableBytesFieldUpdateOperationsInput.ts",
      );
    const nullableDecimalFieldUpdateOperationsInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NullableDecimalFieldUpdateOperationsInput.ts",
      );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(bigIntNullableFilterTSFile).toMatchSnapshot("BigIntNullableFilter");
    expect(bigIntNullableWithAggregatesFilterTSFile).toMatchSnapshot(
      "BigIntNullableWithAggregatesFilter",
    );
    expect(bytesNullableFilterTSFile).toMatchSnapshot("BytesNullableFilter");
    expect(bytesNullableWithAggregatesFilterTSFile).toMatchSnapshot(
      "BytesNullableWithAggregatesFilter",
    );
    expect(decimalNullableFilterTSFile).toMatchSnapshot(
      "DecimalNullableFilter",
    );
    expect(decimalNullableWithAggregatesFilterTSFile).toMatchSnapshot(
      "DecimalNullableWithAggregatesFilter",
    );
    expect(nestedBytesNullableFilterTSFile).toMatchSnapshot(
      "NestedBytesNullableFilter",
    );
    expect(nestedBytesNullableWithAggregatesFilterTSFile).toMatchSnapshot(
      "NestedBytesNullableWithAggregatesFilter",
    );
    expect(nestedDecimalNullableFilterTSFile).toMatchSnapshot(
      "NestedDecimalNullableFilter",
    );
    expect(nestedDecimalNullableWithAggregatesFilterTSFile).toMatchSnapshot(
      "NestedDecimalNullableWithAggregatesFilter",
    );
    expect(nullableBigIntFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "NullableBigIntFieldUpdateOperationsInput",
    );
    expect(nullableBytesFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "NullableBytesFieldUpdateOperationsInput",
    );
    expect(nullableDecimalFieldUpdateOperationsInputTSFile).toMatchSnapshot(
      "NullableDecimalFieldUpdateOperationsInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should generate proper WithAggregatesFilter for scalars", async () => {
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
    // TODO: add nested filter tests
    const stringWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/StringWithAggregatesFilter.ts",
    );
    const floatWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/FloatWithAggregatesFilter.ts",
    );
    const intWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/IntWithAggregatesFilter.ts",
    );
    const boolWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/BoolWithAggregatesFilter.ts",
    );
    const dateTimeWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/DateTimeWithAggregatesFilter.ts",
    );
    const jsonWithAggregatesFilterTSFile = await readGeneratedFile(
      "/resolvers/inputs/JsonWithAggregatesFilter.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(stringWithAggregatesFilterTSFile).toMatchSnapshot(
      "StringWithAggregatesFilter",
    );
    expect(floatWithAggregatesFilterTSFile).toMatchSnapshot(
      "FloatWithAggregatesFilter",
    );
    expect(intWithAggregatesFilterTSFile).toMatchSnapshot(
      "IntWithAggregatesFilter",
    );
    expect(boolWithAggregatesFilterTSFile).toMatchSnapshot(
      "BoolWithAggregatesFilter",
    );
    expect(dateTimeWithAggregatesFilterTSFile).toMatchSnapshot(
      "DateTimeWithAggregatesFilter",
    );
    expect(jsonWithAggregatesFilterTSFile).toMatchSnapshot(
      "JsonWithAggregatesFilter",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should generate proper ScalarWhereWithAggregatesInput for model", async () => {
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
    const sampleScalarWhereWithAggregatesInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleScalarWhereWithAggregatesInput.ts",
    );

    expect(sampleScalarWhereWithAggregatesInputTSFile).toMatchSnapshot(
      "SampleScalarWhereWithAggregatesInput",
    );
  });

  it("should properly generate input type classes for model with native types", async () => {
    const schema = /* prisma */ `
      model NativeTypeModel {
        id      Int      @id @default(autoincrement()) @db.Integer
        bigInt  BigInt?  @db.BigInt
        byteA   Bytes?   @db.ByteA
        decimal Decimal? @db.Decimal
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const nativeTypeModelCreateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/NativeTypeModelCreateInput.ts",
    );
    const nativeTypeModelOrderByWithRelationInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NativeTypeModelOrderByWithRelationInput.ts",
      );
    const nativeTypeModelUpdateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/NativeTypeModelUpdateInput.ts",
    );
    const nativeTypeModelUpdateManyMutationInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/NativeTypeModelUpdateManyMutationInput.ts",
      );
    const nativeTypeModelWhereInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/NativeTypeModelWhereInput.ts",
    );
    const nativeTypeModelWhereUniqueInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/NativeTypeModelWhereUniqueInput.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(nativeTypeModelCreateInputTSFile).toMatchSnapshot(
      "NativeTypeModelCreateInput",
    );
    expect(nativeTypeModelOrderByWithRelationInputTSFile).toMatchSnapshot(
      "NativeTypeModelOrderByWithRelationInput",
    );
    expect(nativeTypeModelUpdateInputTSFile).toMatchSnapshot(
      "NativeTypeModelUpdateInput",
    );
    expect(nativeTypeModelUpdateManyMutationInputTSFile).toMatchSnapshot(
      "NativeTypeModelUpdateManyMutationInput",
    );
    expect(nativeTypeModelWhereInputTSFile).toMatchSnapshot(
      "NativeTypeModelWhereInput",
    );
    expect(nativeTypeModelWhereUniqueInputTSFile).toMatchSnapshot(
      "NativeTypeModelWhereUniqueInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for inserting many entities", async () => {
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
    const firstModelCreateManyInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelCreateManyInput.ts",
    );
    const secondModelCreateManyInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelCreateManyInput.ts",
    );
    const secondModelCreateManyFirstModelFieldInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SecondModelCreateManyFirstModelFieldInput.ts",
      );
    const secondModelCreateManyFirstModelFieldInputEnvelopeTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SecondModelCreateManyFirstModelFieldInputEnvelope.ts",
      );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(firstModelCreateManyInputTSFile).toMatchSnapshot(
      "FirstModelCreateManyInput",
    );
    expect(secondModelCreateManyInputTSFile).toMatchSnapshot(
      "SecondModelCreateManyInput",
    );
    expect(secondModelCreateManyFirstModelFieldInputTSFile).toMatchSnapshot(
      "SecondModelCreateManyFirstModelFieldInput",
    );
    expect(
      secondModelCreateManyFirstModelFieldInputEnvelopeTSFile,
    ).toMatchSnapshot("SecondModelCreateManyFirstModelFieldInputEnvelope");
    expect(indexTSFile).toMatchSnapshot("index");
  });

  describe("when model is renamed", () => {
    it("should properly generate input type classes", async () => {
      const schema = /* prisma */ `
        /// @@TypeGraphQL.type(name: "Example")
        model SampleModel {
          intIdField   Int        @id @default(autoincrement())
          stringField  String     @unique
          floatField   Float
          booleanField Boolean
          dateField    DateTime
          other        OtherModel @relation(fields: [otherId], references: [id])
          otherId      Int
        }

        model OtherModel {
          id          Int           @id @default(autoincrement())
          name        String
          SampleModel SampleModel[]
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const exampleWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/ExampleWhereInput.ts",
      );
      const exampleWhereUniqueInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/ExampleWhereUniqueInput.ts",
      );
      const exampleOrderByWithRelationInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/ExampleOrderByWithRelationInput.ts",
      );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(exampleWhereInputTSFile).toMatchSnapshot("ExampleWhereInput");
      expect(exampleWhereUniqueInputTSFile).toMatchSnapshot(
        "ExampleWhereUniqueInput",
      );
      expect(exampleOrderByWithRelationInputTSFile).toMatchSnapshot(
        "ExampleOrderByWithRelationInput",
      );
      expect(indexTSFile).toMatchSnapshot("index");
    });

    it("should properly generate input type classes for filtering models by many to many relation fields", async () => {
      const schema = /* prisma */ `
        /// @@TypeGraphQL.type(name: "RenamedFirstModel")
        model FirstModel {
          idField            Int            @id @default(autoincrement())
          uniqueStringField  String         @unique
          floatField         Float
          secondModelsField  SecondModel[]
        }
        /// @@TypeGraphQL.type(name: "RenamedSecondModel")
        model SecondModel {
          idField            Int           @id @default(autoincrement())
          uniqueStringField  String        @unique
          floatField         Float
          firstModelsField   FirstModel[]
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const renamedFirstModelWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelWhereInput.ts",
      );
      const renamedFirstModelWhereUniqueInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelWhereUniqueInput.ts",
      );
      const renamedFirstModelScalarWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelScalarWhereInput.ts",
      );
      const renamedFirstModelOrderByWithRelationInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/RenamedFirstModelOrderByWithRelationInput.ts",
        );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(renamedFirstModelWhereInputTSFile).toMatchSnapshot(
        "RenamedFirstModelWhereInput",
      );
      expect(renamedFirstModelWhereUniqueInputTSFile).toMatchSnapshot(
        "RenamedFirstModelWhereUniqueInput",
      );
      expect(renamedFirstModelScalarWhereInputTSFile).toMatchSnapshot(
        "RenamedFirstModelScalarWhereInput",
      );
      expect(renamedFirstModelOrderByWithRelationInputTSFile).toMatchSnapshot(
        "RenamedFirstModelOrderByWithRelationInput",
      );
      expect(indexTSFile).toMatchSnapshot("index");
    });

    it("should properly generate input type classes for filtering models by one to many relation fields", async () => {
      const schema = /* prisma */ `
        /// @@TypeGraphQL.type(name: "RenamedFirstModel")
        model FirstModel {
          idField            Int            @id @default(autoincrement())
          uniqueStringField  String         @unique
          floatField         Float
          secondModelsField  SecondModel[]
        }
        /// @@TypeGraphQL.type(name: "RenamedSecondModel")
        model SecondModel {
          idField            Int          @id @default(autoincrement())
          uniqueStringField  String       @unique
          floatField         Float
          firstModelFieldId  Int
          firstModelField    FirstModel   @relation(fields: [firstModelFieldId], references: [idField])
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const renamedFirstModelWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelWhereInput.ts",
      );
      const renamedFirstModelWhereUniqueInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelWhereUniqueInput.ts",
      );
      const renamedFirstModelOrderByWithRelationInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/RenamedFirstModelOrderByWithRelationInput.ts",
        );
      const renamedFirstModelRelationFilterTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedFirstModelRelationFilter.ts",
      );
      const renamedSecondModelWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedSecondModelWhereInput.ts",
      );
      const renamedSecondModelWhereUniqueInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedSecondModelWhereUniqueInput.ts",
      );
      const renamedSecondModelScalarWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/RenamedSecondModelScalarWhereInput.ts",
      );
      const renamedSecondModelOrderByWithRelationInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/RenamedSecondModelOrderByWithRelationInput.ts",
        );
      const renamedSecondModelListRelationFilterTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/RenamedSecondModelListRelationFilter.ts",
        );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(renamedFirstModelWhereInputTSFile).toMatchSnapshot(
        "RenamedFirstModelWhereInput",
      );
      expect(renamedFirstModelWhereUniqueInputTSFile).toMatchSnapshot(
        "RenamedFirstModelWhereUniqueInput",
      );
      expect(renamedFirstModelOrderByWithRelationInputTSFile).toMatchSnapshot(
        "RenamedFirstModelOrderByWithRelationInput",
      );
      expect(renamedFirstModelRelationFilterTSFile).toMatchSnapshot(
        "RenamedFirstModelRelationFilter",
      );
      expect(renamedSecondModelWhereInputTSFile).toMatchSnapshot(
        "RenamedSecondModelWhereInput",
      );
      expect(renamedSecondModelWhereUniqueInputTSFile).toMatchSnapshot(
        "RenamedSecondModelWhereUniqueInput",
      );
      expect(renamedSecondModelScalarWhereInputTSFile).toMatchSnapshot(
        "RenamedSecondModelScalarWhereInput",
      );
      expect(renamedSecondModelOrderByWithRelationInputTSFile).toMatchSnapshot(
        "RenamedSecondModelOrderByWithRelationInput",
      );
      expect(renamedSecondModelListRelationFilterTSFile).toMatchSnapshot(
        "RenamedSecondModelListRelationFilter",
      );
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });

  describe("when model field is renamed", () => {
    it("should properly generate input type classes", async () => {
      const schema = /* prisma */ `
        model Sample {
          idField         Int     @id @default(autoincrement())
          /// @TypeGraphQL.field(name: "mappedFieldName")
          modelFieldName  String
        }
      `;

      await generateCodeFromSchema(schema, { outputDirPath });
      const sampleWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleWhereInput.ts",
      );
      const sampleOrderByWithRelationInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleOrderByWithRelationInput.ts",
      );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(sampleWhereInputTSFile).toMatchSnapshot("SampleWhereInput");
      expect(sampleOrderByWithRelationInputTSFile).toMatchSnapshot(
        "SampleOrderByWithRelationInput",
      );
      expect(indexTSFile).toMatchSnapshot("index");
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

  describe("when prisma client is generated into node_modules", () => {
    it("should properly generate prisma client imports in input type class files", async () => {
      const schema = /* prisma */ `
        model Sample {
          idField         Int     @id @default(autoincrement())
          modelFieldName  String
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        absolutePrismaOutputPath: "@prisma/client",
      });
      const sampleWhereInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/SampleWhereInput.ts",
      );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(sampleWhereInputTSFile).toMatchSnapshot("SampleWhereInput");
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });

  describe("when useUncheckedScalarInputs mode is enabled", () => {
    it("should properly generate input type classes for filtering models by one to many relation fields", async () => {
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
        useUncheckedScalarInputs: true,
      });
      const firstModelUncheckedCreateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/FirstModelUncheckedCreateInput.ts",
      );
      const firstModelUncheckedCreateWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelUncheckedCreateWithoutSecondModelsFieldInput.ts",
        );
      const firstModelUncheckedUpdateInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/FirstModelUncheckedUpdateInput.ts",
      );
      const firstModelUncheckedUpdateManyInputTSFile = await readGeneratedFile(
        "/resolvers/inputs/FirstModelUncheckedUpdateManyInput.ts",
      );
      const firstModelUncheckedUpdateWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelUncheckedUpdateWithoutSecondModelsFieldInput.ts",
        );
      const firstModelCreateNestedOneWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelCreateNestedOneWithoutSecondModelsFieldInput.ts",
        );
      const firstModelCreateOrConnectWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelCreateOrConnectWithoutSecondModelsFieldInput.ts",
        );
      const firstModelCreateWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelCreateWithoutSecondModelsFieldInput.ts",
        );
      const firstModelUpdateOneRequiredWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelUpdateOneRequiredWithoutSecondModelsFieldInput.ts",
        );
      const firstModelUpdateWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelUpdateWithoutSecondModelsFieldInput.ts",
        );
      const firstModelUpsertWithoutSecondModelsFieldInputTSFile =
        await readGeneratedFile(
          "/resolvers/inputs/FirstModelUpsertWithoutSecondModelsFieldInput.ts",
        );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(firstModelUncheckedCreateInputTSFile).toMatchSnapshot(
        "FirstModelUncheckedCreateInput",
      );
      expect(
        firstModelUncheckedCreateWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot(
        "FirstModelUncheckedCreateWithoutSecondModelsFieldInput",
      );
      expect(firstModelUncheckedUpdateInputTSFile).toMatchSnapshot(
        "FirstModelUncheckedUpdateInput",
      );
      expect(firstModelUncheckedUpdateManyInputTSFile).toMatchSnapshot(
        "FirstModelUncheckedUpdateManyInput",
      );
      expect(
        firstModelUncheckedUpdateWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot(
        "FirstModelUncheckedUpdateWithoutSecondModelsFieldInput",
      );
      expect(
        firstModelCreateNestedOneWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot(
        "FirstModelCreateNestedOneWithoutSecondModelsFieldInput",
      );
      expect(
        firstModelCreateOrConnectWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot(
        "FirstModelCreateOrConnectWithoutSecondModelsFieldInput",
      );
      expect(
        firstModelCreateWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot("FirstModelCreateWithoutSecondModelsFieldInputTSFile");
      expect(
        firstModelUpdateOneRequiredWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot(
        "FirstModelUpdateOneRequiredWithoutSecondModelsFieldInput",
      );
      expect(
        firstModelUpdateWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot("FirstModelUpdateWithoutSecondModelsFieldInputTSFile");
      expect(
        firstModelUpsertWithoutSecondModelsFieldInputTSFile,
      ).toMatchSnapshot("FirstModelUpsertWithoutSecondModelsFieldInputTSFile");
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });

  it("should properly generate input type classes for sorting by many-to-many relation fields", async () => {
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
    const firstModelOrderByWithRelationInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelOrderByWithRelationInput.ts",
    );
    const secondModelOrderByRelationAggregateInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SecondModelOrderByRelationAggregateInput.ts",
      );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(firstModelOrderByWithRelationInputTSFile).toMatchSnapshot(
      "FirstModelOrderByWithRelationInput",
    );
    expect(secondModelOrderByRelationAggregateInputTSFile).toMatchSnapshot(
      "SecondModelOrderByRelationAggregateInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for sorting by one-to-many relation fields", async () => {
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
    const firstModelOrderByWithRelationInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/FirstModelOrderByWithRelationInput.ts",
    );
    const secondModelOrderByRelationAggregateInputTSFile =
      await readGeneratedFile(
        "/resolvers/inputs/SecondModelOrderByRelationAggregateInput.ts",
      );
    const secondModelOrderByWithRelationInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SecondModelOrderByWithRelationInput.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(firstModelOrderByWithRelationInputTSFile).toMatchSnapshot(
      "FirstModelOrderByWithRelationInput",
    );
    expect(secondModelOrderByRelationAggregateInputTSFile).toMatchSnapshot(
      "SecondModelOrderByRelationAggregateInput",
    );
    expect(secondModelOrderByWithRelationInputTSFile).toMatchSnapshot(
      "SecondModelOrderByWithRelationInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  it("should properly generate input type classes for sorting by many-to-many relation fields", async () => {
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
    const sampleOrderByWithAggregationInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleOrderByWithAggregationInput.ts",
    );
    const sampleMaxOrderByAggregateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleMaxOrderByAggregateInput.ts",
    );
    const sampleMinOrderByAggregateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleMinOrderByAggregateInput.ts",
    );
    const sampleAvgOrderByAggregateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleAvgOrderByAggregateInput.ts",
    );
    const sampleCountOrderByAggregateInputTSFile = await readGeneratedFile(
      "/resolvers/inputs/SampleCountOrderByAggregateInput.ts",
    );
    const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

    expect(sampleOrderByWithAggregationInputTSFile).toMatchSnapshot(
      "SampleOrderByWithAggregationInput",
    );
    expect(sampleMaxOrderByAggregateInputTSFile).toMatchSnapshot(
      "SampleMaxOrderByAggregateInput",
    );
    expect(sampleMinOrderByAggregateInputTSFile).toMatchSnapshot(
      "SampleMinOrderByAggregateInput",
    );
    expect(sampleAvgOrderByAggregateInputTSFile).toMatchSnapshot(
      "SampleAvgOrderByAggregateInput",
    );
    expect(sampleCountOrderByAggregateInputTSFile).toMatchSnapshot(
      "SampleCountOrderByAggregateInput",
    );
    expect(indexTSFile).toMatchSnapshot("index");
  });

  describe("when `filterJson` preview feature is enabled", () => {
    it("should properly generate input type classes for filtering json fields", async () => {
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
        previewFeatures: ["filterJson"],
      });
      const jsonFilterTSFile = await readGeneratedFile(
        "/resolvers/inputs/JsonFilter.ts",
      );
      const jsonWithAggregatesFilterTSFile = await readGeneratedFile(
        "/resolvers/inputs/JsonWithAggregatesFilter.ts",
      );
      const nestedJsonFilterTSFile = await readGeneratedFile(
        "/resolvers/inputs/NestedJsonFilter.ts",
      );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(jsonFilterTSFile).toMatchSnapshot("JsonFilter");
      expect(jsonWithAggregatesFilterTSFile).toMatchSnapshot(
        "JsonWithAggregatesFilter",
      );
      expect(nestedJsonFilterTSFile).toMatchSnapshot("NestedJsonFilter");
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });

  describe("when `fullTextSearch` preview feature is enabled", () => {
    it("should properly generate input type classes with string search field", async () => {
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
        previewFeatures: ["fullTextSearch"],
      });
      const nestedStringFilterTSFile = await readGeneratedFile(
        "/resolvers/inputs/NestedStringFilter.ts",
      );
      const stringFilterTSFile = await readGeneratedFile(
        "/resolvers/inputs/StringFilter.ts",
      );
      const indexTSFile = await readGeneratedFile("/resolvers/inputs/index.ts");

      expect(nestedStringFilterTSFile).toMatchSnapshot("NestedStringFilter");
      expect(stringFilterTSFile).toMatchSnapshot("StringFilter");
      expect(indexTSFile).toMatchSnapshot("index");
    });
  });
});
