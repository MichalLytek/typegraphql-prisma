export interface GenerateCodeOptions {
  outputDirPath: string;
  emitDMMF?: boolean;
  emitTranspiledCode?: boolean;
  useOriginalMapping?: boolean;
  relativePrismaOutputPath: string;
  absolutePrismaOutputPath?: string;
  simpleResolvers?: boolean;
  useUncheckedScalarInputs?: boolean;
  emitIdAsIDType?: boolean;
}
