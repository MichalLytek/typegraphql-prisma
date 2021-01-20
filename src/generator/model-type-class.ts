import {
  PropertyDeclarationStructure,
  OptionalKind,
  Project,
  GetAccessorDeclarationStructure,
  Writers,
} from "ts-morph";
import path from "path";

import {
  generateTypeGraphQLImport,
  generateModelsImports,
  generateEnumsImports,
  generateGraphQLScalarImport,
  generatePrismaJsonTypeImport,
} from "./imports";
import { modelsFolderName } from "./config";
import { DMMF } from "./dmmf/types";
import { DmmfDocument } from "./dmmf/dmmf-document";

export default function generateObjectTypeClassFromModel(
  project: Project,
  baseDirPath: string,
  model: DMMF.Model,
  dmmfDocument: DmmfDocument,
) {
  const dirPath = path.resolve(baseDirPath, modelsFolderName);
  const filePath = path.resolve(dirPath, `${model.typeName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateTypeGraphQLImport(sourceFile);
  generateGraphQLScalarImport(sourceFile);
  generatePrismaJsonTypeImport(sourceFile, dmmfDocument.options, 1);
  generateModelsImports(
    sourceFile,
    model.fields
      .filter(field => field.location === "inputObjectTypes")
      .filter(field => field.type !== model.name)
      .map(field =>
        dmmfDocument.isModelName(field.type)
          ? dmmfDocument.getModelTypeName(field.type)!
          : field.type,
      ),
  );
  generateEnumsImports(
    sourceFile,
    model.fields
      .filter(field => field.location === "enumTypes")
      .map(field => field.type),
  );

  sourceFile.addClass({
    name: model.typeName,
    isExported: true,
    decorators: [
      {
        name: "TypeGraphQL.ObjectType",
        arguments: [
          Writers.object({
            isAbstract: "true",
            ...(model.docs && { description: `"${model.docs}"` }),
            ...(dmmfDocument.options.simpleResolvers && {
              simpleResolvers: "true",
            }),
          }),
        ],
      },
    ],
    properties: model.fields.map<OptionalKind<PropertyDeclarationStructure>>(
      field => {
        const isOptional =
          !!field.relationName ||
          field.isOmitted.output ||
          (!field.isRequired && field.typeFieldAlias === undefined);

        return {
          name: field.name,
          type: field.fieldTSType,
          hasExclamationToken: !isOptional,
          hasQuestionToken: isOptional,
          trailingTrivia: "\r\n",
          decorators: [
            ...(field.relationName ||
            field.typeFieldAlias ||
            field.isOmitted.output
              ? []
              : [
                  {
                    name: "TypeGraphQL.Field",
                    arguments: [
                      `_type => ${field.typeGraphQLType}`,
                      Writers.object({
                        nullable: `${isOptional}`,
                        ...(field.docs && { description: `"${field.docs}"` }),
                      }),
                    ],
                  },
                ]),
          ],
          ...(field.docs && {
            docs: [{ description: field.docs }],
          }),
        };
      },
    ),
    getAccessors: model.fields
      .filter(
        field =>
          field.typeFieldAlias &&
          !field.relationName &&
          !field.isOmitted.output,
      )
      .map<OptionalKind<GetAccessorDeclarationStructure>>(field => {
        return {
          name: field.typeFieldAlias!,
          returnType: field.fieldTSType,
          trailingTrivia: "\r\n",
          decorators: [
            {
              name: "TypeGraphQL.Field",
              arguments: [
                `_type => ${field.typeGraphQLType}`,
                Writers.object({
                  nullable: `${!field.isRequired}`,
                  ...(field.docs && { description: `"${field.docs}"` }),
                }),
              ],
            },
          ],
          statements: [
            field.isRequired
              ? `return this.${field.name};`
              : `return this.${field.name} ?? null;`,
          ],
          ...(field.docs && {
            docs: [{ description: field.docs }],
          }),
        };
      }),
    ...(model.docs && {
      docs: [{ description: model.docs }],
    }),
  });
}
