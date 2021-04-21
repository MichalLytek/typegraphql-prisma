import { SourceFile, VariableDeclarationKind, Writers } from "ts-morph";
import {
  crudResolversFolderName,
  inputsFolderName,
  modelsFolderName,
  outputsFolderName,
  relationsResolversFolderName,
  resolversFolderName,
} from "./config";
import { DMMF } from "./dmmf/types";

export function generateEnhanceMap(
  sourceFile: SourceFile,
  modelMappings: DMMF.ModelMapping[],
  relationModels: DMMF.RelationModel[],
  models: DMMF.Model[],
  inputs: DMMF.InputType[],
  outputs: DMMF.OutputType[],
) {
  const hasRelations = relationModels.length > 0;

  sourceFile.addImportDeclaration({
    moduleSpecifier: "type-graphql",
    namedImports: ["ClassType"],
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: `./${resolversFolderName}/${crudResolversFolderName}/resolvers-crud.index`,
    namespaceImport: "crudResolvers",
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: `./${resolversFolderName}/${crudResolversFolderName}/resolvers-actions.index`,
    namespaceImport: "actionResolvers",
  });

  if (hasRelations) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: `./${resolversFolderName}/${relationsResolversFolderName}/resolvers.index`,
      namespaceImport: "relationResolvers",
    });
  }

  sourceFile.addImportDeclaration({
    moduleSpecifier: `./${modelsFolderName}`,
    namespaceImport: "models",
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: `./${resolversFolderName}/${outputsFolderName}`,
    namespaceImport: "outputTypes",
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: `./${resolversFolderName}/${inputsFolderName}`,
    namespaceImport: "inputTypes",
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: `./${resolversFolderName}/${crudResolversFolderName}/args.index`,
    namespaceImport: "argsTypes",
  });

  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "crudResolversMap",
        initializer: Writers.object(
          Object.fromEntries(
            modelMappings.map(mapping => [
              mapping.modelTypeName,
              `crudResolvers.${mapping.resolverName}`,
            ]),
          ),
        ),
      },
    ],
    trailingTrivia: "\r\n",
  });

  if (hasRelations) {
    sourceFile.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "relationResolversMap",
          initializer: Writers.object(
            Object.fromEntries(
              relationModels.map(relationModel => [
                relationModel.model.typeName,
                `relationResolvers.${relationModel.resolverName}`,
              ]),
            ),
          ),
        },
      ],
      trailingTrivia: "\r\n",
    });
  }

  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "actionResolversMap",
        initializer: Writers.object(
          Object.fromEntries(
            modelMappings.map(mapping => [
              mapping.modelTypeName,
              Writers.object(
                Object.fromEntries(
                  mapping.actions.map(action => [
                    action.name,
                    `actionResolvers.${action.actionResolverName}`,
                  ]),
                ),
              ),
            ]),
          ),
        ),
      },
    ],
  });

  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "resolversInfo",
        initializer: Writers.object(
          Object.fromEntries(
            modelMappings.map(mapping => [
              mapping.modelTypeName,
              `[${mapping.actions
                .map(action => `"${action.name}"`)
                .join(", ")}]`,
            ]),
          ),
        ),
      },
    ],
    trailingTrivia: "\r\n",
  });

  if (hasRelations) {
    sourceFile.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "relationResolversInfo",
          initializer: Writers.object(
            Object.fromEntries(
              relationModels.map(relationModel => [
                relationModel.model.typeName,
                `[${relationModel.relationFields
                  .map(field => `"${field.name}"`)
                  .join(", ")}]`,
              ]),
            ),
          ),
        },
      ],
      trailingTrivia: "\r\n",
    });
  }

  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "modelsInfo",
        initializer: Writers.object(
          Object.fromEntries(
            // TODO: support _count
            models.map(model => {
              const fieldsToEmit = model.fields.filter(
                field => !field.relationName && !field.isOmitted.output,
              );
              return [
                model.typeName,
                `[${fieldsToEmit
                  .map(field => `"${field.typeFieldAlias ?? field.name}"`)
                  .join(", ")}]`,
              ];
            }),
          ),
        ),
      },
    ],
    trailingTrivia: "\r\n",
  });

  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "inputsInfo",
        initializer: Writers.object(
          Object.fromEntries(
            inputs.map(input => [
              input.typeName,
              `[${input.fields
                .map(field => `"${field.typeName}"`)
                .join(", ")}]`,
            ]),
          ),
        ),
      },
    ],
    trailingTrivia: "\r\n",
  });

  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "outputsInfo",
        initializer: Writers.object(
          Object.fromEntries(
            outputs.map(output => [
              output.typeName,
              `[${output.fields.map(field => `"${field.name}"`).join(", ")}]`,
            ]),
          ),
        ),
      },
    ],
    trailingTrivia: "\r\n",
  });

  const actions = modelMappings
    .flatMap(it => it.actions)
    .filter(it => it.argsTypeName);

  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "argsInfo",
        initializer: Writers.object(
          Object.fromEntries(
            actions.map(action => [
              action.argsTypeName,
              `[${action.method.args
                .map(arg => `"${arg.typeName}"`)
                .join(", ")}]`,
            ]),
          ),
        ),
      },
    ],
    trailingTrivia: "\r\n",
  });

  sourceFile.addStatements(/* ts */ `
    type ResolverModelNames = keyof typeof crudResolversMap;

    type ModelResolverActionNames<
      TModel extends ResolverModelNames
      > = keyof typeof crudResolversMap[TModel]["prototype"];

    export type ResolverActionsConfig<
      TModel extends ResolverModelNames
    > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

    export type ResolversEnhanceMap = {
      [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
    };

    export function applyResolversEnhanceMap(
      resolversEnhanceMap: ResolversEnhanceMap,
    ) {
      for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName]!;
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
          const allActionsDecorators = resolverActionsConfig._all;
          const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
          for (const resolverActionName of resolverActionNames) {
            const actionTarget = (actionResolversConfig[
              resolverActionName as keyof typeof actionResolversConfig
            ] as Function).prototype;
            for (const allActionsDecorator of allActionsDecorators) {
              allActionsDecorator(
                crudTarget,
                resolverActionName,
                Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
              );
              allActionsDecorator(
                actionTarget,
                resolverActionName,
                Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
              );
            }
          }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
          it => it !== "_all"
        );
        for (const resolverActionName of resolverActionsToApply) {
          const decorators = resolverActionsConfig[
            resolverActionName as keyof typeof resolverActionsConfig
          ] as MethodDecorator[];
          const actionTarget = (actionResolversConfig[
            resolverActionName as keyof typeof actionResolversConfig
          ] as Function).prototype;
          for (const decorator of decorators) {
            decorator(
              crudTarget,
              resolverActionName,
              Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
            );
            decorator(
              actionTarget,
              resolverActionName,
              Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
            );
          }
        }
      }
    }
  `);

  if (hasRelations) {
    sourceFile.addStatements(/* ts */ `
      type RelationResolverModelNames = keyof typeof relationResolversMap;

      type RelationResolverActionNames<
        TModel extends RelationResolverModelNames
        > = keyof typeof relationResolversMap[TModel]["prototype"];

      export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
        = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

      export type RelationResolversEnhanceMap = {
        [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
      };

      export function applyRelationResolversEnhanceMap(
        relationResolversEnhanceMap: RelationResolversEnhanceMap,
      ) {
        for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
          const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
          const relationResolverTarget = relationResolversMap[modelName].prototype;
          const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
          if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
            for (const relationResolverActionName of relationResolverActionNames) {
              for (const allActionsDecorator of allActionsDecorators) {
                allActionsDecorator(
                  relationResolverTarget,
                  relationResolverActionName,
                  Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
                );
              }
            }
          }
          const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
            it => it !== "_all"
          );
          for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[
              relationResolverActionName as keyof typeof relationResolverActionsConfig
            ] as MethodDecorator[];
            for (const decorator of decorators) {
              decorator(
                relationResolverTarget,
                relationResolverActionName,
                Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
              );
            }
          }
        }
      }
    `);
  }

  sourceFile.addStatements(/* ts */ `
    type TypeConfig = {
      class?: ClassDecorator[];
      fields?: FieldsConfig;
    };

    type FieldsConfig<TTypeKeys extends string = string> = Partial<
      Record<TTypeKeys | "_all", PropertyDecorator[]>
    >;

    function applyTypeClassEnhanceConfig<
      TEnhanceConfig extends TypeConfig,
      TType extends object
    >(
      enhanceConfig: TEnhanceConfig,
      typeClass: ClassType<TType>,
      typePrototype: TType,
      typeFieldNames: string[]
    ) {
      if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
          decorator(typeClass);
        }
      }
      if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
          const allFieldsDecorators = enhanceConfig.fields._all;
          for (const typeFieldName of typeFieldNames) {
            for (const allFieldsDecorator of allFieldsDecorators) {
              allFieldsDecorator(typePrototype, typeFieldName);
            }
          }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
          it => it !== "_all"
        );
        for (const typeFieldName of configFieldsToApply) {
          const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
          for (const fieldDecorator of fieldDecorators) {
            fieldDecorator(typePrototype, typeFieldName);
          }
        }
      }
    }
  `);

  sourceFile.addStatements(/* ts */ `
    type ModelNames = keyof typeof models;

    type ModelFieldNames<TModel extends ModelNames> = Exclude<
      keyof typeof models[TModel]["prototype"],
      number | symbol
    >;

    type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
      ModelFieldNames<TModel>
    >;

    export type ModelConfig<TModel extends ModelNames> = {
      class?: ClassDecorator[];
      fields?: ModelFieldsConfig<TModel>;
    };

    export type ModelsEnhanceMap = {
      [TModel in ModelNames]?: ModelConfig<TModel>;
    };

    export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
      for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
        const modelConfig = modelsEnhanceMap[modelName]!;
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(
          modelConfig,
          modelClass,
          modelTarget,
          modelsInfo[modelName as keyof typeof modelsInfo],
        );
      }
    }
  `);

  sourceFile.addStatements(/* ts */ `
    type OutputTypesNames = keyof typeof outputTypes;

    type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
      keyof typeof outputTypes[TOutput]["prototype"],
      number | symbol
    >;

    type OutputTypeFieldsConfig<
      TOutput extends OutputTypesNames
    > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

    export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
      class?: ClassDecorator[];
      fields?: OutputTypeFieldsConfig<TOutput>;
    };

    export type OutputTypesEnhanceMap = {
      [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
    };

    export function applyOutputTypesEnhanceMap(
      outputTypesEnhanceMap: OutputTypesEnhanceMap,
    ) {
      for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
        const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(
          typeConfig,
          typeClass,
          typeTarget,
          outputsInfo[outputTypeName as keyof typeof outputsInfo],
        );
      }
    }
  `);

  sourceFile.addStatements(/* ts */ `
    type InputTypesNames = keyof typeof inputTypes;

    type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
      keyof typeof inputTypes[TInput]["prototype"],
      number | symbol
    >;

    type InputTypeFieldsConfig<
      TInput extends InputTypesNames
    > = FieldsConfig<InputTypeFieldNames<TInput>>;

    export type InputTypeConfig<TInput extends InputTypesNames> = {
      class?: ClassDecorator[];
      fields?: InputTypeFieldsConfig<TInput>;
    };

    export type InputTypesEnhanceMap = {
      [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
    };

    export function applyInputTypesEnhanceMap(
      inputTypesEnhanceMap: InputTypesEnhanceMap,
    ) {
      for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
        const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(
          typeConfig,
          typeClass,
          typeTarget,
          inputsInfo[inputTypeName as keyof typeof inputsInfo],
        );
      }
    }
  `);

  sourceFile.addStatements(/* ts */ `
    type ArgsTypesNames = keyof typeof argsTypes;

    type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
      keyof typeof argsTypes[TArgsType]["prototype"],
      number | symbol
    >;

    type ArgFieldsConfig<
      TArgsType extends ArgsTypesNames
    > = FieldsConfig<ArgFieldNames<TArgsType>>;

    export type ArgConfig<TArgsType extends ArgsTypesNames> = {
      class?: ClassDecorator[];
      fields?: ArgFieldsConfig<TArgsType>;
    };

    export type ArgsTypesEnhanceMap = {
      [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
    };

    export function applyArgsTypesEnhanceMap(
      argsTypesEnhanceMap: ArgsTypesEnhanceMap,
    ) {
      for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
        const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(
          typeConfig,
          typeClass,
          typeTarget,
          argsInfo[argsTypeName as keyof typeof argsInfo],
        );
      }
    }
  `);
}
