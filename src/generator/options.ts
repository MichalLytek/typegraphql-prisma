export interface GenerateCodeOptions {
  emitDMMF?: boolean;
  emitTranspiledCode?: boolean;
  simpleResolvers?: boolean;
  useOriginalMapping?: boolean;
  useUncheckedScalarInputs?: boolean;
  emitIdAsIDType?: boolean;

  /* internal options */
  outputDirPath: string;
  relativePrismaOutputPath: string;
  absolutePrismaOutputPath?: string;
  selectRelationCountEnabled?: boolean;
}
