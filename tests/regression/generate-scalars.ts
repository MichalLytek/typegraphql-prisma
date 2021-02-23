import { promises as fs } from "fs";
import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe("custom scalars", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("scalars-regression");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  it("should properly emit custom scalars file", async () => {
    const schema = /* prisma */ `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

      model Sample {
        id    Int     @id @default(autoincrement())
        text  String
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const scalarsTSFile = await readGeneratedFile("/scalars.ts");
    const mainIndexTSFile = await readGeneratedFile("/index.ts");

    expect(scalarsTSFile).toMatchSnapshot("scalars");
    expect(mainIndexTSFile).toMatchSnapshot("mainIndex");
  });
});
