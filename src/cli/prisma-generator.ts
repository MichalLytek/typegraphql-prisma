import { GeneratorOptions } from "@prisma/generator-helper";
import { DMMF as PrismaDMMF } from "@prisma/client/runtime";
import { promises as asyncFs } from "fs";
import path from "path";
import { unflatten } from "flat";
import _ from "underscore";

import generateCode from "../generator/generate-code";
import removeDir from "../utils/removeDir";
import { GenerateCodeOptions, ScalarTypesOptions } from "../generator/options";
import { toUnixPath } from "../generator/helpers";

function parseStringBoolean(stringBoolean: string | undefined) {
  return stringBoolean ? stringBoolean === "true" : undefined;
}

function resolveCustomScalar(
  oldTypes?: Record<string, ScalarTypesOptions>,
): Record<string, ScalarTypesOptions> {
  const types = _.chain(oldTypes ?? {})
    // not both field and graphql entry supplied -- skip
    .pick((value, _) => !!(value.field && value.graphql))
    // none of the entries had field and graphql type supplied -- skip
    .pick((value, _) => !!(value!.field!.type || value!.graphql!.type))
    // none of the entries had field and graphql module supplied -- skip
    .pick((value, _) => !!(value!.field!.module || value!.graphql!.module))
    .value() as object;

  for (const [_, value] of Object.entries(types ?? {})) {
    // one of the entry has type name -- automatic deduction from the entry with non empty module name
    if (!!value.field.type !== !!value.graphql.type) {
      value.graphql.type = value.graphql.type ?? value.field.type;
      value.field.type = value.field.type ?? value.graphql.type;
    }

    // ditto
    if (!!value.field.module !== !!value.graphql.module) {
      value.graphql.module = value.graphql.module ?? value.field.module;
      value.field.module = value.field.module ?? value.graphql.module;
    }
  }
  return types as Record<string, ScalarTypesOptions>;
}

export async function generate(options: GeneratorOptions) {
  const outputDir = options.generator.output!;
  await asyncFs.mkdir(outputDir, { recursive: true });
  await removeDir(outputDir, true);

  const prismaClientPath = options.otherGenerators.find(
    it => it.provider === "prisma-client-js",
  )!.output!;
  const prismaClientDmmf = require(prismaClientPath)
    .dmmf as PrismaDMMF.Document;

  const generatorConfig = options.generator.config;
  const {
    types = {},
  }: {
    types?: Record<string, ScalarTypesOptions>;
  } = unflatten(
    _.pick(generatorConfig, (_: string, key: string) =>
      key.startsWith("types"),
    ),
    { delimiter: "_" },
  );

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
    types: resolveCustomScalar(types),
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
