import { Project, ScriptTarget, ModuleKind, CompilerOptions } from "ts-morph";

const baseCompilerOptions: CompilerOptions = {
  target: ScriptTarget.ES2019,
  module: ModuleKind.CommonJS,
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  esModuleInterop: true,
};

export function createNewTsMorphProject(emitTranspiledCode: boolean) {
  return new Project({
    compilerOptions: {
      ...baseCompilerOptions,
      ...(emitTranspiledCode && { declaration: true }),
    },
  });
}
