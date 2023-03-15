import {
  OptionalKind,
  MethodDeclarationStructure,
  Project,
  Writers,
} from "ts-morph";
import path from "path";

import { camelCase } from "../helpers";
import { resolversFolderName, relationsResolversFolderName } from "../config";
import {
  generateTypeGraphQLImport,
  generateArgsImports,
  generateModelsImports,
  generateHelpersFileImport,
  generateGraphQLInfoImport,
} from "../imports";
import { DmmfDocument } from "../dmmf/dmmf-document";
import { DMMF } from "../dmmf/types";
import { GeneratorOptions } from "../options";

export default function generateRelationsResolverClassesFromModel(
  project: Project,
  baseDirPath: string,
  dmmfDocument: DmmfDocument,
  { model, relationFields, resolverName }: DMMF.RelationModel,
  generatorOptions: GeneratorOptions,
) {
  const rootArgName = camelCase(model.typeName);
  const singleIdField = model.fields.find(field => field.isId);
  const singleUniqueField = model.fields.find(field => field.isUnique);
  const singleFilterField = singleIdField ?? singleUniqueField;
  const compositeIdFields =
    model.primaryKey?.fields.map(
      idField => model.fields.find(field => idField === field.name)!,
    ) ?? [];
  const compositeUniqueFields = model.uniqueIndexes[0]
    ? model.uniqueIndexes[0].fields.map(
        uniqueField => model.fields.find(field => uniqueField === field.name)!,
      )
    : [];
  const compositeFilterFields =
    compositeIdFields.length > 0 ? compositeIdFields : compositeUniqueFields;

  const resolverDirPath = path.resolve(
    baseDirPath,
    resolversFolderName,
    relationsResolversFolderName,
    model.typeName,
  );
  const filePath = path.resolve(resolverDirPath, `${resolverName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateTypeGraphQLImport(sourceFile);
  generateGraphQLInfoImport(sourceFile);
  generateModelsImports(
    sourceFile,
    [...relationFields.map(field => field.type), model.typeName],
    3,
  );

  const argTypeNames = relationFields
    .filter(it => it.argsTypeName !== undefined)
    .map(it => it.argsTypeName!);
  generateArgsImports(sourceFile, argTypeNames, 0);
  generateHelpersFileImport(sourceFile, 3);

  sourceFile.addClass({
    name: resolverName,
    isExported: true,
    decorators: [
      {
        name: "TypeGraphQL.Resolver",
        arguments: [`_of => ${model.typeName}`],
      },
    ],
    methods: relationFields.map<OptionalKind<MethodDeclarationStructure>>(
      field => {
        let whereConditionString: string = "";
        // TODO: refactor to AST
        if (singleFilterField) {
          whereConditionString = `
            ${singleFilterField.name}: ${rootArgName}.${singleFilterField.name},
          `;
        } else if (compositeFilterFields.length > 0) {
          const filterKeyName =
            model.primaryKey?.name ??
            model.uniqueIndexes[0]?.name ??
            compositeFilterFields.map(it => it.name).join("_");
          whereConditionString = `
            ${filterKeyName}: {
              ${compositeFilterFields
                .map(
                  idField => `${idField.name}: ${rootArgName}.${idField.name},`,
                )
                .join("\n")}
            },
          `;
        } else {
          throw new Error(
            `Unexpected error happened on generating 'whereConditionString' for ${model.typeName} relation resolver`,
          );
        }
        return {
          name: field.typeFieldAlias ?? field.name,
          isAsync: true,
          returnType: `Promise<${field.fieldTSType}>`,
          decorators: [
            {
              name: "TypeGraphQL.FieldResolver",
              arguments: [
                `_type => ${field.typeGraphQLType}`,
                Writers.object({
                  nullable: `${!field.isRequired}`,
                  ...(field.docs && { description: `"${field.docs}"` }),
                }),
              ],
            },
          ],
          parameters: [
            {
              name: rootArgName,
              type: model.typeName,
              decorators: [{ name: "TypeGraphQL.Root", arguments: [] }],
            },
            {
              name: "ctx",
              // TODO: import custom `ContextType`
              type: "any",
              decorators: [{ name: "TypeGraphQL.Ctx", arguments: [] }],
            },
            {
              name: "info",
              type: "GraphQLResolveInfo",
              decorators: [{ name: "TypeGraphQL.Info", arguments: [] }],
            },
            ...(!field.argsTypeName
              ? []
              : [
                  {
                    name: "args",
                    type: field.argsTypeName,
                    decorators: [
                      {
                        name: "TypeGraphQL.Args",
                        arguments: generatorOptions.emitRedundantTypesInfo
                          ? [`_type => ${field.argsTypeName}`]
                          : [],
                      },
                    ],
                  },
                ]),
          ],
          // TODO: refactor to AST
          statements: [
            /* ts */ ` const { _count } = transformInfoIntoPrismaArgs(info);
            return getPrismaFromContext(ctx).${camelCase(
              model.name,
            )}.findUnique({
              where: {${whereConditionString}},
            }).${field.name}({ ${field.argsTypeName ? "\n...args," : ""}
              ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
            });`,
          ],
        };
      },
    ),
  });
}
