import { SourceFile, VariableDeclarationKind, Writers } from "ts-morph";
import { crudResolversFolderName, resolversFolderName } from "./config";
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
    type ModelNames = keyof typeof crudResolversMap;

    type ModelResolverActionNames<
      TModel extends ModelNames
    > = keyof typeof crudResolversMap[TModel]["prototype"];

    export type ResolverActionsConfig<TModel extends ModelNames> = {
      [TActionName in ModelResolverActionNames<TModel>]?: MethodDecorator[];
    };

    export type ResolversEnhanceMap = {
      [TModel in ModelNames]?: ResolverActionsConfig<TModel>;
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
}
