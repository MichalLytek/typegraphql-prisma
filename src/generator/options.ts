export interface GenerateCodeOptions {
  outputDirPath: string;
  emitDMMF?: boolean;
  noResolvers?: boolean;
  emitTranspiledCode?: boolean;
  useOriginalMapping?: boolean;
  relativePrismaOutputPath: string;
  absolutePrismaOutputPath?: string;
  simpleResolvers?: boolean;
  useUncheckedScalarInputs?: boolean;
}
