import { EmitBlockKind } from "./emit-block";

export interface ExternalGeneratorOptions {
  emitDMMF?: boolean;
  emitTranspiledCode?: boolean;
  simpleResolvers?: boolean;
  useOriginalMapping?: boolean;
  useUncheckedScalarInputs?: boolean;
  emitIdAsIDType?: boolean;
  emitOnly?: EmitBlockKind[];
  customPrismaImportPath?: string;
}

export interface InternalGeneratorOptions {
  outputDirPath: string;
  relativePrismaOutputPath: string;
  absolutePrismaOutputPath?: string;
}

export interface GeneratorOptions
  extends Omit<ExternalGeneratorOptions, "emitOnly">,
    InternalGeneratorOptions {
  blocksToEmit: EmitBlockKind[];
}
