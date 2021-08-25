import { GeneratorOptions } from "@prisma/generator-helper";
import { DMMF as PrismaDMMF } from "@prisma/client/runtime";
import { parseEnvValue } from "@prisma/sdk";
import { promises as asyncFs } from "fs";
import path from "path";

import generateCode from "../generator/generate-code";
import removeDir from "../utils/removeDir";
import { GenerateCodeOptions } from "../generator/options";
import { toUnixPath } from "../generator/helpers";

function parseStringBoolean(stringBoolean: string | undefined) {
  return stringBoolean ? stringBoolean === "true" : undefined;
}

export async function generate(options: GeneratorOptions) {
  const outputDir = parseEnvValue(options.generator.output!);
  await asyncFs.mkdir(outputDir, { recursive: true });
  await removeDir(outputDir, true);

  const prismaClientProvider = options.otherGenerators.find(
    it => parseEnvValue(it.provider) === "prisma-client-js",
  )!;
  const prismaClientPath = parseEnvValue(prismaClientProvider.output!);
  const prismaClientDmmf = require(prismaClientPath)
    .dmmf as PrismaDMMF.Document;

  const generatorConfig = options.generator.config;
  const config: GenerateCodeOptions = {
    emitDMMF: parseStringBoolean(generatorConfig.emitDMMF),
    emitTranspiledCode: parseStringBoolean(generatorConfig.emitTranspiledCode),
    simpleResolvers: parseStringBoolean(generatorConfig.simpleResolvers),
    useOriginalMapping: parseStringBoolean(generatorConfig.useOriginalMapping),
    outputDirPath: outputDir,
    relativePrismaOutputPath: toUnixPath(
      path.relative(outputDir, prismaClientPath),
    ),
    absolutePrismaOutputPath: prismaClientPath.includes("node_modules")
      ? "@prisma/client"
      : undefined,
    useUncheckedScalarInputs: parseStringBoolean(
      generatorConfig.useUncheckedScalarInputs,
    ),
    emitIdAsIDType: parseStringBoolean(generatorConfig.emitIdAsIDType),
  };

  if (config.emitDMMF) {
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
  await generateCode(prismaClientDmmf, config);
  return "";
}
