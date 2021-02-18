export interface ScalarTypesOptions2 {
  type?: String,
  module?: String,
}

export interface ScalarTypesOptions {
  field?: ScalarTypesOptions2,
  graphql?: ScalarTypesOptions2,
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
