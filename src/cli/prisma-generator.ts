import { GeneratorOptions } from "@prisma/generator-helper";
import { getDMMF, parseEnvValue } from "@prisma/internals";
import { promises as asyncFs } from "fs";
import path from "path";

import generateCode from "../generator/generate-code";
import removeDir from "../utils/removeDir";
import {
  ExternalGeneratorOptions,
  InternalGeneratorOptions,
} from "../generator/options";
import { toUnixPath } from "../generator/helpers";
import { ALL_EMIT_BLOCK_KINDS } from "../generator/emit-block";
import {
  loadFileCallback,
  parseStringBoolean,
  parseStringArray,
} from "./helpers";

export async function generate(options: GeneratorOptions) {
  const outputDir = parseEnvValue(options.generator.output!);
  await asyncFs.mkdir(outputDir, { recursive: true });
  await removeDir(outputDir, true);

  const prismaClientProvider = options.otherGenerators.find(
    it => parseEnvValue(it.provider) === "prisma-client-js",
  )!;
  const prismaClientPath = parseEnvValue(prismaClientProvider.output!);
  const prismaClientDmmf = await getDMMF({
    datamodel: options.datamodel,
    previewFeatures: prismaClientProvider.previewFeatures,
  });

  const generatorConfig = options.generator.config;
  const externalConfig: ExternalGeneratorOptions = {
    emitDMMF: parseStringBoolean(generatorConfig.emitDMMF),
    emitTranspiledCode: parseStringBoolean(generatorConfig.emitTranspiledCode),
    simpleResolvers: parseStringBoolean(generatorConfig.simpleResolvers),
    useOriginalMapping: parseStringBoolean(generatorConfig.useOriginalMapping),
    customMappingFn: await loadFileCallback(generatorConfig.customMappingFn),
    useUncheckedScalarInputs: parseStringBoolean(
      generatorConfig.useUncheckedScalarInputs,
    ),
    emitIdAsIDType: parseStringBoolean(generatorConfig.emitIdAsIDType),
    emitOnly: parseStringArray(
      generatorConfig.emitOnly,
      "emitOnly",
      ALL_EMIT_BLOCK_KINDS,
    ),
    customPrismaImportPath: generatorConfig.customPrismaImportPath,
    contextPrismaKey: generatorConfig.contextPrismaKey,
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
