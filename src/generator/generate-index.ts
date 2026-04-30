import { SourceFile } from "ts-morph";

import { generateIndexFile } from "./imports";
import { EmitBlockKind } from "./emit-block";
import { renderIndexWithRust } from "../native/generator";

function renderIndexWithTypeScript(
  sourceFile: SourceFile,
  hasSomeRelations: boolean,
  blocksToEmit: EmitBlockKind[],
) {
  generateIndexFile(sourceFile, hasSomeRelations, blocksToEmit);
}

export function generateIndex(
  sourceFile: SourceFile,
  hasSomeRelations: boolean,
  blocksToEmit: EmitBlockKind[],
) {
  const nativeGeneratedText = renderIndexWithRust({
    hasSomeRelations,
    blocksToEmit,
  });
  if (nativeGeneratedText) {
    sourceFile.replaceWithText(nativeGeneratedText);
    return;
  }

  renderIndexWithTypeScript(sourceFile, hasSomeRelations, blocksToEmit);
}
