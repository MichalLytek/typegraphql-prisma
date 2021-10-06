import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";
import { promises as fs } from "fs";
import { generateCodeFromSchema } from "../helpers/generate-code";
import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { getDirectoryStructureString } from "../helpers/structure";

describe("emitOnly generator option", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;
  let schema: string;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("emit-only-regression");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
    schema = /* prisma */ `
      model User {
        id          Int     @id @default(autoincrement())
        email       String  @unique
        posts       Post[]  @relation("posts")
      }

      model Post {
        uuid      String    @id @default(uuid())
        createdAt DateTime  @default(now())
        updatedAt DateTime  @updatedAt
        published Boolean
        title     String
        content   String?
        author    User      @relation(fields: [authorId], references: [id], name: "posts")
        authorId  Int
        metadata  Json
      }
    `;
  });

  describe("when only 'enums' is set", () => {
    it("should generate proper files, enhance and index", async () => {
      await generateCodeFromSchema(schema, {
        emitOnly: ["enums"],
        outputDirPath,
      });

      const enhanceTSFile = await readGeneratedFile("/enhance.ts");
      const mainIndexTSFile = await readGeneratedFile("/index.ts");
      const directoryStructureString =
        getDirectoryStructureString(outputDirPath);

      expect(enhanceTSFile).toMatchSnapshot("enhance");
      expect(mainIndexTSFile).toMatchSnapshot("mainIndex");
      // FIXME: replace with `.toMatchInlineSnapshot()` when it starts working again
      expect(directoryStructureString).toMatchSnapshot("structure");
    });
  });

  describe("when only 'models' is set", () => {
    it("should generate proper files, enhance and index", async () => {
      await generateCodeFromSchema(schema, {
        emitOnly: ["models"],
        outputDirPath,
      });

      const enhanceTSFile = await readGeneratedFile("/enhance.ts");
      const mainIndexTSFile = await readGeneratedFile("/index.ts");
      const directoryStructureString =
        getDirectoryStructureString(outputDirPath);

      expect(enhanceTSFile).toMatchSnapshot("enhance");
      expect(mainIndexTSFile).toMatchSnapshot("mainIndex");
      // FIXME: replace with `.toMatchInlineSnapshot()` when it starts working again
      expect(directoryStructureString).toMatchSnapshot("structure");
    });
  });

  describe("when only 'crudResolvers' is set", () => {
    it("should generate proper files, enhance and index", async () => {
      await generateCodeFromSchema(schema, {
        emitOnly: ["crudResolvers"],
        outputDirPath,
      });

      const enhanceTSFile = await readGeneratedFile("/enhance.ts");
      const mainIndexTSFile = await readGeneratedFile("/index.ts");
      const directoryStructureString =
        getDirectoryStructureString(outputDirPath);

      expect(enhanceTSFile).toMatchSnapshot("enhance");
      expect(mainIndexTSFile).toMatchSnapshot("mainIndex");
      // FIXME: replace with `.toMatchInlineSnapshot()` when it starts working again
      expect(directoryStructureString).toMatchSnapshot("structure");
    });
  });

  describe("when only 'relationResolvers' is set", () => {
    it("should generate proper files, enhance and index", async () => {
      await generateCodeFromSchema(schema, {
        emitOnly: ["relationResolvers"],
        outputDirPath,
      });

      const enhanceTSFile = await readGeneratedFile("/enhance.ts");
      const mainIndexTSFile = await readGeneratedFile("/index.ts");
      const directoryStructureString =
        getDirectoryStructureString(outputDirPath);

      expect(enhanceTSFile).toMatchSnapshot("enhance");
      expect(mainIndexTSFile).toMatchSnapshot("mainIndex");
      // FIXME: replace with `.toMatchInlineSnapshot()` when it starts working again
      expect(directoryStructureString).toMatchSnapshot("structure");
    });
  });

  describe("when only 'inputs' is set", () => {
    it("should generate proper files, enhance and index", async () => {
      await generateCodeFromSchema(schema, {
        emitOnly: ["inputs"],
        outputDirPath,
      });

      const enhanceTSFile = await readGeneratedFile("/enhance.ts");
      const mainIndexTSFile = await readGeneratedFile("/index.ts");
      const directoryStructureString =
        getDirectoryStructureString(outputDirPath);

      expect(enhanceTSFile).toMatchSnapshot("enhance");
      expect(mainIndexTSFile).toMatchSnapshot("mainIndex");
      // FIXME: replace with `.toMatchInlineSnapshot()` when it starts working again
      expect(directoryStructureString).toMatchSnapshot("structure");
    });
  });

  describe("when only 'outputs' is set", () => {
    it("should generate proper files, enhance and index", async () => {
      await generateCodeFromSchema(schema, {
        emitOnly: ["outputs"],
        outputDirPath,
      });

      const enhanceTSFile = await readGeneratedFile("/enhance.ts");
      const mainIndexTSFile = await readGeneratedFile("/index.ts");
      const directoryStructureString =
        getDirectoryStructureString(outputDirPath);

      expect(enhanceTSFile).toMatchSnapshot("enhance");
      expect(mainIndexTSFile).toMatchSnapshot("mainIndex");
      // FIXME: replace with `.toMatchInlineSnapshot()` when it starts working again
      expect(directoryStructureString).toMatchSnapshot("structure");
    });
  });

  describe("when both 'crudResolvers' and `inputs` is set", () => {
    it("should not fail and generate proper files, enhance and index", async () => {
      await generateCodeFromSchema(schema, {
        emitOnly: ["crudResolvers", "inputs"],
        outputDirPath,
      });

      const enhanceTSFile = await readGeneratedFile("/enhance.ts");
      const mainIndexTSFile = await readGeneratedFile("/index.ts");
      const directoryStructureString =
        getDirectoryStructureString(outputDirPath);

      expect(enhanceTSFile).toMatchSnapshot("enhance");
      expect(mainIndexTSFile).toMatchSnapshot("mainIndex");
      // FIXME: replace with `.toMatchInlineSnapshot()` when it starts working again
      expect(directoryStructureString).toMatchSnapshot("structure");
    });
  });
});
