import { promises as fs } from "fs";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe("models", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("regression-models");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  it("should properly generate object type class for prisma model with different scalar fields types", async () => {
    const schema = /* prisma */ `
      model User {
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
    const userModelTSFile = await readGeneratedFile("/models/User.ts");

    expect(userModelTSFile).toMatchSnapshot("User");
  });

  it("should properly generate object type class for prisma model with enum and alias fields types", async () => {
    const schema = /* prisma */ `
      type Numeric = Float

      enum Sample {
        SAMPLE
      }

      model User {
        intIdField  Int     @id @default(autoincrement())
        aliasField  Numeric
        enumField   Sample
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const userModelTSFile = await readGeneratedFile("/models/User.ts");

    expect(userModelTSFile).toMatchSnapshot("User");
  });

  it("should properly generate object type classes for prisma models with cyclic relations", async () => {
    const schema = /* prisma */ `
      model User {
        id     Int    @id @default(autoincrement())
        posts  Post[]
      }
      model Post {
        id        Int   @id @default(autoincrement())
        author    User  @relation(fields: [authorId], references: [id])
        authorId  Int
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const userModelTSFile = await readGeneratedFile("/models/User.ts");
    const postModelTSFile = await readGeneratedFile("/models/Post.ts");

    expect(userModelTSFile).toMatchSnapshot("User");
    expect(postModelTSFile).toMatchSnapshot("Post");
  });

  it("should properly generate object type classes for prisma models with self relations", async () => {
    const schema = /* prisma */ `
      model Service {
        id            Int       @default(autoincrement()) @id
        name          String
        sourceService Service?  @relation("serviceToService", fields: [sourceId], references: [id])
        sourceId      Int?
        services      Service[] @relation("serviceToService")
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const serviceModelTSFile = await readGeneratedFile("/models/Service.ts");

    expect(serviceModelTSFile).toMatchSnapshot("Service");
  });

  it("should properly generate object type class for prisma model with descriptions", async () => {
    const schema = /* prisma */ `
      /// User model doc
      model User {
        id          Int    @id @default(autoincrement())
        /// field doc
        stringField String
        // field comment
        intField    Int
        /// relation doc
        posts       Post[]
      }

      model Post {
        id     Int   @id @default(autoincrement())
        userId Int?
        User   User? @relation(fields: [userId], references: [id])
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath, noResolvers: true });
    const userModelTSFile = await readGeneratedFile("/models/User.ts");

    expect(userModelTSFile).toMatchSnapshot("User");
  });

  it("should properly generate object type classes for prisma models with cyclic relations when models are renamed", async () => {
    const schema = /* prisma */ `
      /// @@TypeGraphQL.type(name: "Client")
      model User {
        id     Int    @id @default(autoincrement())
        posts  Post[]
      }
      /// @@TypeGraphQL.type(name: "Article")
      model Post {
        id        Int   @id @default(autoincrement())
        author    User  @relation(fields: [authorId], references: [id])
        authorId  Int
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const clientModelTSFile = await readGeneratedFile("/models/Client.ts");
    const articleModelTSFile = await readGeneratedFile("/models/Article.ts");

    expect(clientModelTSFile).toMatchSnapshot("Client");
    expect(articleModelTSFile).toMatchSnapshot("Article");
  });

  it("should properly generate object type class for prisma model with renamed fields", async () => {
    const schema = /* prisma */ `
      model User {
        id           Int       @id @default(autoincrement())
        dateOfBirth  DateTime
        /// renamed field docs
        /// @TypeGraphQL.field(name: "firstName")
        name         String
        /// @TypeGraphQL.field(name: "accountBalance")
        balance      Float?
        /// @TypeGraphQL.field(name: "userPosts")
        posts        Post[]
      }
      model Post {
        uuid      String  @id @default(cuid())
        author    User?   @relation(fields: [authorId], references: [id])
        authorId  Int?
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const userModelTSFile = await readGeneratedFile("/models/User.ts");

    expect(userModelTSFile).toMatchSnapshot("User");
  });

  it("should properly generate object type class for prisma model with omitted field", async () => {
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
    const userModelTSFile = await readGeneratedFile("/models/User.ts");

    expect(userModelTSFile).toMatchSnapshot("User");
  });

  it("should properly generate object type class for prisma model when simpleResolvers option is enabled", async () => {
    const schema = /* prisma */ `
      model User {
        id           Int       @id @default(autoincrement())
        dateOfBirth  DateTime
        balance      Float?
      }
    `;

    await generateCodeFromSchema(schema, {
      outputDirPath,
      simpleResolvers: true,
    });
    const userModelTSFile = await readGeneratedFile("/models/User.ts");

    expect(userModelTSFile).toMatchSnapshot("User");
  });

  it("should properly generate object type class for prisma model with native types", async () => {
    const schema = /* prisma */ `
      model NativeTypeModel {
        id      Int      @id @default(autoincrement()) @db.Integer
        bigInt  BigInt?  @db.BigInt
        byteA   Bytes?   @db.ByteA
        decimal Decimal? @db.Decimal
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const nativeTypeModelTSFile = await readGeneratedFile(
      "/models/NativeTypeModel.ts",
    );

    expect(nativeTypeModelTSFile).toMatchSnapshot("NativeTypeModel");
  });

  const schemaWith2ModelsAndRelation = /* prisma */ `
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
  describe("when selectRelationCount preview feature is enabled", () => {
    it("should properly generate model object type class", async () => {
      await generateCodeFromSchema(schemaWith2ModelsAndRelation, {
        outputDirPath,
        previewFeatures: ["selectRelationCount"],
      });
      const firstModelTSFile = await readGeneratedFile("/models/FirstModel.ts");

      expect(firstModelTSFile).toMatchSnapshot("FirstModel");
    });
  });

  describe("when noResolvers is enabled", () => {
    it("should generate model object type class without _count field", async () => {
      await generateCodeFromSchema(schemaWith2ModelsAndRelation, {
        outputDirPath,
        noResolvers: true,
        previewFeatures: ["selectRelationCount"],
      });
      const firstModelTSFile = await readGeneratedFile("/models/FirstModel.ts");

      expect(firstModelTSFile).toMatchSnapshot("FirstModel");
    });
  });
});
