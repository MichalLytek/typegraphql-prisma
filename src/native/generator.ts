import path from "path";

import { EmitBlockKind } from "../generator/emit-block";
import { DMMF } from "../generator/dmmf/types";
import { GeneratorOptions } from "../generator/options";
import {
  NATIVE_CONTRACT_VERSION,
  NativeGenerateRequest,
  NativeGenerateResponse,
  NativeSlice,
} from "./contract";
import { getNativeModule } from "./index";

const NATIVE_SLICES_ENV_VAR = "TYPEGRAPHQL_PRISMA_RUST_SLICES";

export function shouldUseNativeSlice(slice: NativeSlice): boolean {
  const value = process.env[NATIVE_SLICES_ENV_VAR]?.trim();
  if (!value) {
    return false;
  }

  const enabledSlices = value
    .split(",")
    .map(it => it.trim().toLowerCase())
    .filter(Boolean);

  return enabledSlices.includes("all") || enabledSlices.includes(slice);
}

function getPrismaImportPath(options: GeneratorOptions) {
  return (
    options.absolutePrismaOutputPath ??
    `./${path.posix.join(options.customPrismaImportPath ?? options.relativePrismaOutputPath)}`
  );
}

function renderWithRust(request: NativeGenerateRequest): string | null {
  const native = getNativeModule();
  if (!native) {
    return null;
  }

  try {
    const rawResponse = native.generate(JSON.stringify(request));
    const response = JSON.parse(rawResponse) as NativeGenerateResponse;

    if (
      response.contractVersion !== NATIVE_CONTRACT_VERSION ||
      response.ok !== true
    ) {
      return null;
    }

    return response.result.text;
  } catch {
    return null;
  }
}

export function renderCustomScalarsWithRust(
  options: GeneratorOptions,
): string | null {
  if (!shouldUseNativeSlice("scalars")) {
    return null;
  }

  return renderWithRust({
    contractVersion: NATIVE_CONTRACT_VERSION,
    action: "generate_scalars",
    payload: {
      prismaImportPath: getPrismaImportPath(options),
    },
  });
}

export function renderHelpersWithRust(options: GeneratorOptions): string | null {
  if (!shouldUseNativeSlice("helpers")) {
    return null;
  }

  return renderWithRust({
    contractVersion: NATIVE_CONTRACT_VERSION,
    action: "generate_helpers",
    payload: {
      contextPrismaKey: options.contextPrismaKey,
    },
  });
}

export function renderIndexWithRust(input: {
  hasSomeRelations: boolean;
  blocksToEmit: EmitBlockKind[];
}): string | null {
  if (!shouldUseNativeSlice("index")) {
    return null;
  }

  return renderWithRust({
    contractVersion: NATIVE_CONTRACT_VERSION,
    action: "generate_index",
    payload: {
      hasSomeRelations: input.hasSomeRelations,
      blocksToEmit: input.blocksToEmit,
    },
  });
}

export function renderEnumWithRust(enumDef: DMMF.Enum): string | null {
  if (!shouldUseNativeSlice("enums")) {
    return null;
  }

  return renderWithRust({
    contractVersion: NATIVE_CONTRACT_VERSION,
    action: "generate_enum",
    payload: {
      typeName: enumDef.typeName,
      docs: enumDef.docs,
      valuesMap: enumDef.valuesMap.map(({ name, value }) => ({ name, value })),
    },
  });
}
