import { SourceFile, VariableDeclarationKind, Writers } from "ts-morph";
import {
  crudResolversFolderName,
  inputsFolderName,
  modelsFolderName,
  outputsFolderName,
  resolversFolderName,
} from "./config";
import { DMMF } from "./dmmf/types";

export function generateEnhanceMap(
  sourceFile: SourceFile,
  modelMappings: DMMF.ModelMapping[],
) {
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

  sourceFile.addStatements(/* ts */ `
    type ResolverModelNames = keyof typeof crudResolversMap;

    type ModelResolverActionNames<
      TModel extends ResolverModelNames
    > = keyof typeof crudResolversMap[TModel]["prototype"];

    export type ResolverActionsConfig<TModel extends ResolverModelNames> = {
      [TActionName in ModelResolverActionNames<TModel>]?: MethodDecorator[];
    };

    export type ResolversEnhanceMap = {
      [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
    };

    export function applyResolversEnhanceMap(
      resolversEnhanceMap: ResolversEnhanceMap,
    ) {
      for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
        const resolverActionsConfig = resolversEnhanceMap[modelName]!;
        for (const modelResolverActionName of Object.keys(resolverActionsConfig)) {
          const decorators = resolverActionsConfig[
            modelResolverActionName as keyof typeof resolverActionsConfig
          ] as MethodDecorator[];
          const crudTarget = crudResolversMap[modelName].prototype;
          const actionResolversConfig = actionResolversMap[modelName];
          const actionTarget = (actionResolversConfig[
            modelResolverActionName as keyof typeof actionResolversConfig
          ] as Function).prototype;
          for (const decorator of decorators) {
            decorator(
              crudTarget,
              modelResolverActionName,
              Object.getOwnPropertyDescriptor(crudTarget, modelResolverActionName)!,
            );
            decorator(
              actionTarget,
              modelResolverActionName,
              Object.getOwnPropertyDescriptor(actionTarget, modelResolverActionName)!,
            );
          }
        }
      }
    }
  `);

  sourceFile.addStatements(/* ts */ `
    type TypeConfig = {
      class?: ClassDecorator[];
      fields?: FieldsConfig;
    };

    type FieldsConfig<TTypeKeys extends string = string> = Partial<
      Record<TTypeKeys, PropertyDecorator[]>
    >;

    function applyTypeClassEnhanceConfig<
      TEnhanceConfig extends TypeConfig,
      TType extends object
    >(
      enhanceConfig: TEnhanceConfig,
      typeClass: ClassType<TType>,
      typePrototype: TType,
    ) {
      if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
          decorator(typeClass);
        }
      }
      if (enhanceConfig.fields) {
        for (const modelFieldName of Object.keys(enhanceConfig.fields)) {
          const decorators = enhanceConfig.fields[
            modelFieldName as keyof typeof enhanceConfig.fields
          ]!;

          for (const decorator of decorators) {
            decorator(typePrototype, modelFieldName);
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
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget);
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
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
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
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
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
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
      }
    }
  `);
}
