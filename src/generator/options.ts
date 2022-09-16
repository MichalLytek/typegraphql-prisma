import { EmitBlockKind } from "./emit-block";
import { DMMF } from "./types";

export interface ExternalGeneratorOptions {
  emitDMMF?: boolean;
  emitTranspiledCode?: boolean;
  simpleResolvers?: boolean;
  useOriginalMapping?: boolean;
  customMappingFn?: (
    actionName: DMMF.ModelAction,
    typeName: string,
    options: GeneratorOptions,
  ) => string;
  useUncheckedScalarInputs?: boolean;
  emitIdAsIDType?: boolean;
  emitOnly?: EmitBlockKind[];
  customPrismaImportPath?: string;
  contextPrismaKey?: string;
}

export interface InternalGeneratorOptions {
  outputDirPath: string;
  prismaClientPath: string;
}

export interface GeneratorOptions
  extends Omit<ExternalGeneratorOptions, "emitOnly" | "contextPrismaKey">,
    InternalGeneratorOptions {
  blocksToEmit: EmitBlockKind[];
  contextPrismaKey: string;
  relativePrismaOutputPath: string;
  absolutePrismaOutputPath: string | undefined;
}
