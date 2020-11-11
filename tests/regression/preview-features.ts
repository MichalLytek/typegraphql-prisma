import { promises as fs } from "fs";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe.skip("preview features", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("preview-features");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  describe("when new preview feature is available", () => {
    it.todo("should have a test case for that");
  });
});
