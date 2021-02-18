export interface ScalarTypesOptionEntry {
  type?: string;
  module?: string;
}

export interface ScalarTypesOptions {
  field?: ScalarTypesOptionEntry;
  graphql?: ScalarTypesOptionEntry;
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
  types?: Record<string, ScalarTypesOptions>;
}
