import { EnumMemberStructure, OptionalKind, Project } from "ts-morph";
import path from "path";

import { generateTypeGraphQLImport } from "./imports";
import { enumsFolderName } from "./config";
import { DMMF } from "./dmmf/types";
import { convertNewLines } from "./helpers";
import { renderEnumWithRust } from "../native/generator";

function renderEnumWithTypeScript(
  project: Project,
  baseDirPath: string,
  enumDef: DMMF.Enum,
) {
  const dirPath = path.resolve(baseDirPath, enumsFolderName);
  const filePath = path.resolve(dirPath, `${enumDef.typeName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });
  generateTypeGraphQLImport(sourceFile);

  sourceFile.addEnum({
    isExported: true,
    name: enumDef.typeName,
    ...(enumDef.docs && {
      docs: [{ description: convertNewLines(enumDef.docs) }],
    }),
    members: enumDef.valuesMap.map<OptionalKind<EnumMemberStructure>>(
      ({ name, value }) => ({
        name,
        value,
      }),
    ),
  });

  sourceFile.addStatements([
    `TypeGraphQL.registerEnumType(${enumDef.typeName}, {
      name: "${enumDef.typeName}",
      description: ${enumDef.docs ? `"${enumDef.docs}"` : "undefined"},
    });`,
  ]);
}

export default function generateEnumFromDef(
  project: Project,
  baseDirPath: string,
  enumDef: DMMF.Enum,
) {
  const nativeGeneratedText = renderEnumWithRust(enumDef);
  if (nativeGeneratedText) {
    const dirPath = path.resolve(baseDirPath, enumsFolderName);
    const filePath = path.resolve(dirPath, `${enumDef.typeName}.ts`);
    const sourceFile = project.createSourceFile(filePath, undefined, {
      overwrite: true,
    });
    sourceFile.replaceWithText(nativeGeneratedText);
    return;
  }

  renderEnumWithTypeScript(project, baseDirPath, enumDef);
}
