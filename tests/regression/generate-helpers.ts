import { promises as fs } from "fs";
import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe("helpers", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("helpers-regression");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  it("should properly emit helpers file", async () => {
    const schema = /* prisma */ `
      model Sample {
        id    Int     @id @default(autoincrement())
        text  String
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const helpersTSFile = await readGeneratedFile("/helpers.ts");

    expect(helpersTSFile).toMatchSnapshot("helpers");
  });

  describe("when contextPrismaKey generator option is set", () => {
    it("should properly generate `getPrismaFromContext`", async () => {
      const schema = /* prisma */ `
        model Sample {
          id    Int     @id @default(autoincrement())
          text  String
        }
      `;

      await generateCodeFromSchema(schema, {
        outputDirPath,
        contextPrismaKey: "samplePrisma",
      });
      const helpersTSFile = await readGeneratedFile("/helpers.ts");

      expect(helpersTSFile).toMatchSnapshot("helpers");
    });
  });
});
