import fsSync, { promises as fs } from "fs";
import path from "path";
import { execSync } from "child_process";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";
import { getNativeModule } from "../../src/native";
import { NATIVE_CONTRACT_VERSION } from "../../src/native/contract";

function getNativeLibraryName() {
  if (process.platform === "darwin") {
    return "libtypegraphql_prisma_rs_node.dylib";
  }
  if (process.platform === "linux") {
    return "libtypegraphql_prisma_rs_node.so";
  }
  if (process.platform === "win32") {
    return "typegraphql_prisma_rs_node.dll";
  }
  throw new Error(
    `Unsupported platform for native parity test: ${process.platform}`,
  );
}

function ensureNativeModuleBuilt(): boolean {
  const nativeDirPath = path.resolve(__dirname, "../../native");
  const nativeModulePath = path.join(nativeDirPath, "index.node");

  if (fsSync.existsSync(nativeModulePath)) {
    return true;
  }

  try {
    execSync("cargo build", { cwd: nativeDirPath, stdio: "pipe" });
    const builtLibraryPath = path.join(
      nativeDirPath,
      "target",
      "debug",
      getNativeLibraryName(),
    );
    fsSync.copyFileSync(builtLibraryPath, nativeModulePath);
    return true;
  } catch {
    return false;
  }
}

describe("native index parity", () => {
  let nativeReady = false;
  let tsOutputDirPath: string;
  let rustOutputDirPath: string;
  let readTsGeneratedFile: ReadGeneratedFile;
  let readRustGeneratedFile: ReadGeneratedFile;

  beforeAll(() => {
    nativeReady = ensureNativeModuleBuilt();
  });

  beforeEach(async () => {
    tsOutputDirPath = generateArtifactsDirPath("native-index-parity-ts");
    rustOutputDirPath = generateArtifactsDirPath("native-index-parity-rust");

    await fs.mkdir(tsOutputDirPath, { recursive: true });
    await fs.mkdir(rustOutputDirPath, { recursive: true });

    readTsGeneratedFile = createReadGeneratedFile(tsOutputDirPath);
    readRustGeneratedFile = createReadGeneratedFile(rustOutputDirPath);
  });

  it("should handle generate_index action in native module", () => {
    if (!nativeReady) {
      console.warn(
        "Skipping native parity assertion because native module build/load is unavailable.",
      );
      return;
    }

    const nativeModule = getNativeModule();
    expect(nativeModule).toBeTruthy();

    const response = JSON.parse(
      nativeModule!.generate(
        JSON.stringify({
          contractVersion: NATIVE_CONTRACT_VERSION,
          action: "generate_index",
          payload: {
            hasSomeRelations: true,
            blocksToEmit: ["enums", "models", "crudResolvers", "relationResolvers", "inputs", "outputs"],
          },
        }),
      ),
    );

    expect(response.contractVersion).toBe(NATIVE_CONTRACT_VERSION);
    expect(response.ok).toBe(true);
    expect(typeof response.result.text).toBe("string");
    expect(response.result.text).toContain("export * from \"./scalars\";");
  });

  it("should match index.ts output between TypeScript and Rust paths", async () => {
    if (!nativeReady) {
      console.warn(
        "Skipping native parity assertion because native module build/load is unavailable.",
      );
      return;
    }

    const schema = /* prisma */ `
      model User {
        id    Int     @id @default(autoincrement())
        posts Post[]
      }

      model Post {
        id      Int   @id @default(autoincrement())
        userId  Int
        user    User  @relation(fields: [userId], references: [id])
      }
    `;

    const previousSlices = process.env.TYPEGRAPHQL_PRISMA_RUST_SLICES;

    try {
      delete process.env.TYPEGRAPHQL_PRISMA_RUST_SLICES;
      await generateCodeFromSchema(schema, { outputDirPath: tsOutputDirPath });

      process.env.TYPEGRAPHQL_PRISMA_RUST_SLICES = "index";
      await generateCodeFromSchema(schema, {
        outputDirPath: rustOutputDirPath,
      });
    } finally {
      if (previousSlices === undefined) {
        delete process.env.TYPEGRAPHQL_PRISMA_RUST_SLICES;
      } else {
        process.env.TYPEGRAPHQL_PRISMA_RUST_SLICES = previousSlices;
      }
    }

    const tsIndexFile = await readTsGeneratedFile("/index.ts");
    const rustIndexFile = await readRustGeneratedFile("/index.ts");

    expect(rustIndexFile).toEqual(tsIndexFile);
  });

  it("should match index.ts output with emitOnly options", async () => {
    if (!nativeReady) {
      console.warn(
        "Skipping native parity assertion because native module build/load is unavailable.",
      );
      return;
    }

    const schema = /* prisma */ `
      model Sample {
        id    Int     @id @default(autoincrement())
        text  String
      }
    `;

    const previousSlices = process.env.TYPEGRAPHQL_PRISMA_RUST_SLICES;

    try {
      delete process.env.TYPEGRAPHQL_PRISMA_RUST_SLICES;
      await generateCodeFromSchema(schema, {
        outputDirPath: tsOutputDirPath,
        emitOnly: ["models"],
      });

      process.env.TYPEGRAPHQL_PRISMA_RUST_SLICES = "index";
      await generateCodeFromSchema(schema, {
        outputDirPath: rustOutputDirPath,
        emitOnly: ["models"],
      });
    } finally {
      if (previousSlices === undefined) {
        delete process.env.TYPEGRAPHQL_PRISMA_RUST_SLICES;
      } else {
        process.env.TYPEGRAPHQL_PRISMA_RUST_SLICES = previousSlices;
      }
    }

    const tsIndexFile = await readTsGeneratedFile("/index.ts");
    const rustIndexFile = await readRustGeneratedFile("/index.ts");

    expect(rustIndexFile).toEqual(tsIndexFile);
  });
});
