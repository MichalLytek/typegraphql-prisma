import type { GeneratorOptions } from "@prisma/generator";
import { getDMMF, parseEnvValue } from "@prisma/internals";
import { promises as asyncFs } from "fs";
import path from "path";

import generateCode from "../generator/generate-code";
import removeDir from "../utils/removeDir";
import {
  ExternalGeneratorOptions,
  InternalGeneratorOptions,
} from "../generator/options";
import { ALL_EMIT_BLOCK_KINDS } from "../generator/emit-block";
import {
  parseStringBoolean,
  parseStringArray,
  parseStringEnum,
  parseString,
} from "./helpers";

export async function generate(options: GeneratorOptions) {
  const supportedPrismaClientProviders = [
    "prisma-client-js",
    "prisma-client",
    "prisma-client-ts",
  ] as const;
  const outputDir = parseEnvValue(options.generator.output!);
  await asyncFs.mkdir(outputDir, { recursive: true });
  await removeDir(outputDir, true);

  const prismaClientProvider = options.otherGenerators.find(
    it =>
      supportedPrismaClientProviders.includes(
        parseEnvValue(it.provider) as (typeof supportedPrismaClientProviders)[number],
      ),
  );
  if (!prismaClientProvider) {
    const detectedProviders = options.otherGenerators.map(it =>
      parseEnvValue(it.provider),
    );
    throw new Error(
      `Could not find a supported Prisma Client generator. ` +
        `Expected one of: ${supportedPrismaClientProviders.join(", ")}. ` +
        `Detected providers: ${detectedProviders.join(", ") || "(none)"}.`,
    );
  }
  const prismaClientPath = parseEnvValue(prismaClientProvider.output!);
  const prismaClientDmmf = await getDMMF({
    datamodel: options.datamodel,
    previewFeatures: prismaClientProvider.previewFeatures,
  });

  const generatorConfig = options.generator.config;
  // TODO: make this type `?-` and `| undefined`
  const externalConfig: ExternalGeneratorOptions = {
    emitDMMF: parseStringBoolean(generatorConfig.emitDMMF),
    emitTranspiledCode: parseStringBoolean(generatorConfig.emitTranspiledCode),
    simpleResolvers: parseStringBoolean(generatorConfig.simpleResolvers),
    useOriginalMapping: parseStringBoolean(generatorConfig.useOriginalMapping),
    useUncheckedScalarInputs: parseStringBoolean(
      generatorConfig.useUncheckedScalarInputs,
    ),
    emitIdAsIDType: parseStringBoolean(generatorConfig.emitIdAsIDType),
    emitOnly: parseStringArray(
      generatorConfig.emitOnly,
      "emitOnly",
      ALL_EMIT_BLOCK_KINDS,
    ),
    useSimpleInputs: parseStringBoolean(generatorConfig.useSimpleInputs),
    emitRedundantTypesInfo: parseStringBoolean(
      generatorConfig.emitRedundantTypesInfo,
    ),
    customPrismaImportPath: parseString(
      generatorConfig.customPrismaImportPath,
      "customPrismaImportPath",
    ),
    contextPrismaKey: parseString(
      generatorConfig.contextPrismaKey,
      "contextPrismaKey",
    ),
    omitInputFieldsByDefault: parseStringArray(
      generatorConfig.omitInputFieldsByDefault,
      "omitInputFieldsByDefault",
    ),
    omitOutputFieldsByDefault: parseStringArray(
      generatorConfig.omitOutputFieldsByDefault,
      "omitOutputFieldsByDefault",
    ),
    formatGeneratedCode:
      parseStringBoolean(generatorConfig.formatGeneratedCode) ??
      parseStringEnum(
        generatorConfig.formatGeneratedCode,
        "formatGeneratedCode",
        ["prettier", "tsc"] as const,
      ),
    emitIsAbstract: parseStringBoolean(generatorConfig.emitIsAbstract) ?? false,
  };
  const internalConfig: InternalGeneratorOptions = {
    outputDirPath: outputDir,
    prismaClientPath,
  };

  if (externalConfig.emitDMMF) {
    await Promise.all([
      asyncFs.writeFile(
        path.resolve(outputDir, "./dmmf.json"),
        JSON.stringify(options.dmmf, null, 2),
      ),
      asyncFs.writeFile(
        path.resolve(outputDir, "./prisma-client-dmmf.json"),
        JSON.stringify(prismaClientDmmf, null, 2),
      ),
    ]);
  }

  // TODO: replace with `options.dmmf` when the spec match prisma client output
  await generateCode(prismaClientDmmf, {
    ...externalConfig,
    ...internalConfig,
  });
  return "";
}
