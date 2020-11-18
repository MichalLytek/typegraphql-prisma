import { OptionalKind, MethodDeclarationStructure } from "ts-morph";

import { DmmfDocument } from "../dmmf/dmmf-document";
import { DMMF } from "../dmmf/types";

export function generateCrudResolverClassMethodDeclaration(
  action: DMMF.Action,
  mapping: DMMF.ModelMapping,
  dmmfDocument: DmmfDocument,
): OptionalKind<MethodDeclarationStructure> {
  return {
    name: action.name,
    isAsync: true,
    returnType: `Promise<${action.returnTSType}>`,
    decorators: [
      {
        name: `TypeGraphQL.${action.operation}`,
        arguments: [
          `_returns => ${action.typeGraphQLType}`,
          `{
            nullable: ${!action.method.isRequired},
            description: undefined
          }`,
        ],
      },
    ],
    parameters: [
      {
        name: "ctx",
        // TODO: import custom `ContextType`
        type: "any",
        decorators: [{ name: "TypeGraphQL.Ctx", arguments: [] }],
      },
      ...(action.kind === "aggregate"
        ? [
            {
              name: "info",
              type: "GraphQLResolveInfo",
              decorators: [{ name: "TypeGraphQL.Info", arguments: [] }],
            },
          ]
        : []),
      ...(!action.argsTypeName
        ? []
        : [
            {
              name: "args",
              type: action.argsTypeName,
              decorators: [{ name: "TypeGraphQL.Args", arguments: [] }],
            },
          ]),
    ],
    statements:
      action.kind === "aggregate"
        ? [
            `function transformFields(fields: Record<string, any>): Record<string, any> {
              return Object.fromEntries(
                Object.entries(fields)
                  .filter(([key, value]) => !key.startsWith("_"))
                  .map<[string, any]>(([key, value]) => {
                    if (Object.keys(value).length === 0) {
                      return [key, true];
                    }
                    return [key, transformFields(value)];
                  }),
              );
            }`,
            `return ctx.prisma.${mapping.collectionName}.${action.kind}({
              ...args,
              ...transformFields(graphqlFields(info as any)),
            });`,
          ]
        : [
            `return ctx.prisma.${mapping.collectionName}.${action.kind}(${
              action.argsTypeName ? "args" : ""
            });`,
          ],
  };
}
