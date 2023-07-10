import {
  SourceFile,
  OptionalKind,
  ExportDeclarationStructure,
  VariableDeclarationKind,
} from "ts-morph";
import path from "path";

import {
  modelsFolderName,
  enumsFolderName,
  inputsFolderName,
  argsFolderName,
  outputsFolderName,
  resolversFolderName,
  crudResolversFolderName,
  relationsResolversFolderName,
} from "./config";
import { GenerateMappingData } from "./types";
import { GeneratorOptions } from "./options";
import { EmitBlockKind } from "./emit-block";

export function generateTypeGraphQLImport(sourceFile: SourceFile) {
  sourceFile.addImportDeclaration({
    moduleSpecifier: "type-graphql",
    namespaceImport: "TypeGraphQL",
  });
}

export function generateGraphQLFieldsImport(sourceFile: SourceFile) {
  sourceFile.addImportDeclaration({
    moduleSpecifier: "graphql-fields",
    defaultImport: "graphqlFields",
  });
}

export function generateGraphQLInfoImport(sourceFile: SourceFile) {
  sourceFile.addImportDeclaration({
    moduleSpecifier: "graphql",
    isTypeOnly: true,
    namedImports: ["GraphQLResolveInfo"],
  });
}

export function generateGraphQLScalarsImport(sourceFile: SourceFile) {
  sourceFile.addImportDeclaration({
    moduleSpecifier: "graphql-scalars",
    namespaceImport: "GraphQLScalars",
  });
}

export function generateGraphQLScalarTypeImport(sourceFile: SourceFile) {
  sourceFile.addImportDeclaration({
    moduleSpecifier: "graphql",
    namedImports: ["GraphQLScalarType"],
  });
}

export function generateCustomScalarsImport(sourceFile: SourceFile, level = 0) {
  sourceFile.addImportDeclaration({
    moduleSpecifier:
      (level === 0 ? "./" : "") +
      path.posix.join(...Array(level).fill(".."), "scalars"),
    namedImports: ["DecimalJSScalar"],
  });
}

export function generateHelpersFileImport(sourceFile: SourceFile, level = 0) {
  sourceFile.addImportDeclaration({
    moduleSpecifier:
      (level === 0 ? "./" : "") +
      path.posix.join(...Array(level).fill(".."), "helpers"),
    namedImports: [
      "transformArgsIntoPrismaArgs",
      "transformInfoIntoPrismaArgs",
      "getPrismaFromContext",
      "transformCountFieldIntoSelectRelationsCount",
    ],
  });
}

export function generatePrismaNamespaceImport(
  sourceFile: SourceFile,
  options: GeneratorOptions,
  level = 0,
) {
  sourceFile.addImportDeclaration({
    moduleSpecifier:
      options.absolutePrismaOutputPath ??
      (level === 0 ? "./" : "") +
        path.posix.join(
          ...Array(level).fill(".."),
          options.customPrismaImportPath ?? options.relativePrismaOutputPath,
        ),
    namedImports: ["Prisma"],
  });
}

export function generateArgsBarrelFile(
  sourceFile: SourceFile,
  argsTypeNames: string[],
) {
  sourceFile.addExportDeclarations(
    argsTypeNames
      .sort()
      .map<OptionalKind<ExportDeclarationStructure>>(argTypeName => ({
        moduleSpecifier: `./${argTypeName}`,
        namedExports: [argTypeName],
      })),
  );
}

export function generateArgsIndexFile(
  sourceFile: SourceFile,
  typeNames: string[],
) {
  sourceFile.addExportDeclarations(
    typeNames
      .sort()
      .map<OptionalKind<ExportDeclarationStructure>>(typeName => ({
        moduleSpecifier: `./${typeName}/args`,
      })),
  );
}

export function generateModelsBarrelFile(
  sourceFile: SourceFile,
  modelNames: string[],
) {
  sourceFile.addExportDeclarations(
    modelNames
      .sort()
      .map<OptionalKind<ExportDeclarationStructure>>(modelName => ({
        moduleSpecifier: `./${modelName}`,
        namedExports: [modelName],
      })),
  );
}

export function generateEnumsBarrelFile(
  sourceFile: SourceFile,
  enumTypeNames: string[],
) {
  sourceFile.addExportDeclarations(
    enumTypeNames
      .sort()
      .map<OptionalKind<ExportDeclarationStructure>>(enumTypeName => ({
        moduleSpecifier: `./${enumTypeName}`,
        namedExports: [enumTypeName],
      })),
  );
}

export function generateInputsBarrelFile(
  sourceFile: SourceFile,
  inputTypeNames: string[],
) {
  sourceFile.addExportDeclarations(
    inputTypeNames
      .sort()
      .map<OptionalKind<ExportDeclarationStructure>>(inputTypeName => ({
        moduleSpecifier: `./${inputTypeName}`,
        namedExports: [inputTypeName],
      })),
  );
}

export function generateOutputsBarrelFile(
  sourceFile: SourceFile,
  outputTypeNames: string[],
  hasSomeArgs: boolean,
) {
  sourceFile.addExportDeclarations(
    outputTypeNames
      .sort()
      .map<OptionalKind<ExportDeclarationStructure>>(outputTypeName => ({
        moduleSpecifier: `./${outputTypeName}`,
        namedExports: [outputTypeName],
      })),
  );
  if (hasSomeArgs) {
    sourceFile.addExportDeclaration({ moduleSpecifier: `./${argsFolderName}` });
  }
}

export function generateIndexFile(
  sourceFile: SourceFile,
  hasSomeRelations: boolean,
  blocksToEmit: EmitBlockKind[],
) {
  if (blocksToEmit.includes("enums")) {
    sourceFile.addExportDeclaration({
      moduleSpecifier: `./${enumsFolderName}`,
    });
  }
  if (blocksToEmit.includes("models")) {
    sourceFile.addExportDeclaration({
      moduleSpecifier: `./${modelsFolderName}`,
    });
  }
  if (blocksToEmit.includes("crudResolvers")) {
    sourceFile.addExportDeclaration({
      moduleSpecifier: `./${resolversFolderName}/${crudResolversFolderName}`,
    });
    sourceFile.addImportDeclaration({
      moduleSpecifier: `./${resolversFolderName}/${crudResolversFolderName}/resolvers-crud.index`,
      namespaceImport: "crudResolversImport",
    });
    sourceFile.addVariableStatement({
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "crudResolvers",
          initializer: `Object.values(crudResolversImport) as unknown as NonEmptyArray<Function>`,
        },
      ],
    });
  }
  if (hasSomeRelations && blocksToEmit.includes("relationResolvers")) {
    sourceFile.addExportDeclaration({
      moduleSpecifier: `./${resolversFolderName}/${relationsResolversFolderName}`,
    });
    sourceFile.addImportDeclaration({
      moduleSpecifier: `./${resolversFolderName}/${relationsResolversFolderName}/resolvers.index`,
      namespaceImport: "relationResolversImport",
    });
    sourceFile.addVariableStatement({
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "relationResolvers",
          initializer: `Object.values(relationResolversImport) as unknown as NonEmptyArray<Function>`,
        },
      ],
    });
  }
  if (blocksToEmit.includes("inputs")) {
    sourceFile.addExportDeclaration({
      moduleSpecifier: `./${resolversFolderName}/${inputsFolderName}`,
    });
  }
  if (blocksToEmit.includes("outputs")) {
    sourceFile.addExportDeclaration({
      moduleSpecifier: `./${resolversFolderName}/${outputsFolderName}`,
    });
  }

  sourceFile.addExportDeclarations([
    { moduleSpecifier: `./enhance` },
    { moduleSpecifier: `./scalars` },
  ]);
  sourceFile.addImportDeclarations([
    {
      moduleSpecifier: `type-graphql`,
      namedImports: ["NonEmptyArray"],
    },
  ]);

  if (
    blocksToEmit.includes("crudResolvers") ||
    (hasSomeRelations && blocksToEmit.includes("relationResolvers"))
  )
    sourceFile.addVariableStatement({
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "resolvers",
          initializer: `[
            ${blocksToEmit.includes("crudResolvers") ? "...crudResolvers," : ""}
            ${
              hasSomeRelations && blocksToEmit.includes("relationResolvers")
                ? "...relationResolvers,"
                : ""
            }
            ] as unknown as NonEmptyArray<Function>`,
        },
      ],
    });
}

export function generateResolversBarrelFile(
  sourceFile: SourceFile,
  resolversData: GenerateMappingData[],
) {
  resolversData
    .sort((a, b) =>
      a.modelName > b.modelName ? 1 : a.modelName < b.modelName ? -1 : 0,
    )
    .forEach(({ modelName, resolverName }) => {
      sourceFile.addExportDeclaration({
        moduleSpecifier: `./${modelName}/${resolverName}`,
        namedExports: [resolverName],
      });
    });
}
export function generateResolversActionsBarrelFile(
  sourceFile: SourceFile,
  resolversData: GenerateMappingData[],
) {
  resolversData
    .sort((a, b) =>
      a.modelName > b.modelName ? 1 : a.modelName < b.modelName ? -1 : 0,
    )
    .forEach(({ modelName, actionResolverNames }) => {
      if (actionResolverNames) {
        actionResolverNames.forEach(actionResolverName => {
          sourceFile.addExportDeclaration({
            moduleSpecifier: `./${modelName}/${actionResolverName}`,
            namedExports: [actionResolverName],
          });
        });
      }
    });
}

export function generateResolversIndexFile(
  sourceFile: SourceFile,
  type: "crud" | "relations",
  hasSomeArgs: boolean,
) {
  if (type === "crud") {
    sourceFile.addExportDeclarations([
      { moduleSpecifier: `./resolvers-actions.index` },
      { moduleSpecifier: `./resolvers-crud.index` },
    ]);
  } else {
    sourceFile.addExportDeclarations([
      { moduleSpecifier: `./resolvers.index` },
    ]);
  }
  if (hasSomeArgs) {
    sourceFile.addExportDeclarations([{ moduleSpecifier: `./args.index` }]);
  }
}

export const generateModelsImports = createImportGenerator(modelsFolderName);
export const generateEnumsImports = createImportGenerator(enumsFolderName);
export const generateInputsImports = createImportGenerator(inputsFolderName);
export const generateOutputsImports = createImportGenerator(outputsFolderName);
// TODO: unify with generateOutputsImports
export const generateResolversOutputsImports = createImportGenerator(
  `${resolversFolderName}/${outputsFolderName}`,
);
export const generateArgsImports = createImportGenerator(argsFolderName);
function createImportGenerator(elementsDirName: string) {
  return (sourceFile: SourceFile, elementsNames: string[], level = 1) => {
    const distinctElementsNames = [...new Set(elementsNames)].sort();
    for (const elementName of distinctElementsNames) {
      sourceFile.addImportDeclaration({
        moduleSpecifier:
          (level === 0 ? "./" : "") +
          path.posix.join(
            ...Array(level).fill(".."),
            elementsDirName,
            elementName,
          ),
        // TODO: refactor to default exports
        // defaultImport: elementName,
        namedImports: [elementName],
      });
    }
  };
}
