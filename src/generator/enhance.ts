import { SourceFile, VariableDeclarationKind, Writers } from "ts-morph";
import {
  crudResolversFolderName,
  modelsFolderName,
  resolversFolderName,
} from "./config";
import { DMMF } from "./dmmf/types";

export function generateEnhanceMap(
  sourceFile: SourceFile,
  modelMappings: DMMF.ModelMapping[],
) {
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
    type ModelNames = keyof typeof models;

    type ModelFieldNames<
      TModel extends ModelNames
    > = keyof typeof models[TModel]["prototype"];

    export type ModelFieldsConfig<TModel extends ModelNames> = {
      [TActionName in ModelFieldNames<TModel>]?: PropertyDecorator[];
    };

    export type ModelConfig<TModel extends ModelNames> = {
      class?: ClassDecorator[];
      fields?: ModelFieldsConfig<TModel>;
    }

    export type ModelsEnhanceMap = {
      [TModel in ModelNames]?: ModelConfig<TModel>;
    };

    export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
      for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
        const modelClass = models[modelName];
        const modelTarget = models[modelName].prototype;
        const modelConfig = modelsEnhanceMap[modelName]!;
        if (modelConfig.class) {
          for (const decorator of modelConfig.class) {
            decorator(modelClass);
          }
        }
        if (modelConfig.fields) {
          for (const modelFieldName of Object.keys(modelConfig.fields)) {
            const decorators = modelConfig.fields[
              modelFieldName as keyof typeof modelConfig.fields
            ] as Array<PropertyDecorator>;

            for (const decorator of decorators) {
              decorator(modelTarget, modelFieldName);
            }
          }
        }
      }
    }
  `);
}
