import { Project } from "ts-morph";
import path from "path";

import { resolversFolderName, crudResolversFolderName } from "../config";
import {
  generateTypeGraphQLImport,
  generateArgsImports,
  generateModelsImports,
  generateOutputsImports,
  generateGraphQLInfoImport,
  generateHelpersFileImport,
} from "../imports";
import { generateCrudResolverClassMethodDeclaration } from "./helpers";
import { DmmfDocument } from "../dmmf/dmmf-document";
import { DMMF } from "../dmmf/types";
import { GeneratorOptions } from "../options";

export default function generateActionResolverClass(
  project: Project,
  baseDirPath: string,
  model: DMMF.Model,
  action: DMMF.Action,
  mapping: DMMF.ModelMapping,
  dmmfDocument: DmmfDocument,
  generatorOptions: GeneratorOptions,
) {
  const sourceFile = project.createSourceFile(
    path.resolve(
      baseDirPath,
      resolversFolderName,
      crudResolversFolderName,
      model.typeName,
      `${action.actionResolverName}.ts`,
    ),
    undefined,
    { overwrite: true },
  );

  generateTypeGraphQLImport(sourceFile);
  generateGraphQLInfoImport(sourceFile);
  if (action.argsTypeName) {
    generateArgsImports(
      sourceFile,
      dmmfDocument.options,
      [action.argsTypeName],
      0,
    );
  }
  generateModelsImports(
    sourceFile,
    dmmfDocument.options,
    [model.typeName, action.outputTypeName].filter(typeName =>
      dmmfDocument.isModelTypeName(typeName),
    ),
    3,
  );
  generateOutputsImports(
    sourceFile,
    dmmfDocument.options,
    [action.outputTypeName].filter(
      typeName => !dmmfDocument.isModelTypeName(typeName),
    ),
    2,
  );
  generateHelpersFileImport(sourceFile, dmmfDocument.options, 3);

  sourceFile.addClass({
    name: action.actionResolverName,
    isExported: true,
    decorators: [
      {
        name: "TypeGraphQL.Resolver",
        arguments: [`_of => ${model.typeName}`],
      },
    ],
    methods: [
      generateCrudResolverClassMethodDeclaration(
        action,
        mapping,
        dmmfDocument,
        generatorOptions,
      ),
    ],
  });
}
