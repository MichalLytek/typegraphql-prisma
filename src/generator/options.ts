export interface CustomScalarOptionEntry {
  type?: string;
  module?: string;
}

export interface CustomScalarOptions {
  field?: CustomScalarOptionEntry;
  graphql?: CustomScalarOptionEntry;
}

export interface GenerateCodeOptions {
  outputDirPath: string;
  emitDMMF?: boolean;
  emitTranspiledCode?: boolean;
  useOriginalMapping?: boolean;
  relativePrismaOutputPath: string;
  absolutePrismaOutputPath?: string;
  simpleResolvers?: boolean;
  useUncheckedScalarInputs?: boolean;
  customScalar?: Record<string, CustomScalarOptions>;
}
