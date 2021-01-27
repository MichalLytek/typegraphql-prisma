import { OptionalKind, MethodDeclarationStructure, Writers } from "ts-morph";

import { DmmfDocument } from "../dmmf/dmmf-document";
import { DMMF } from "../dmmf/types";

// TODO: extract helper to importable file
const transformFieldsFunctionStatement = /* ts */ ` function transformFields(fields: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(fields)
      // remove __typename and others
      .filter(([key, value]) => !key.startsWith("__"))
      .map<[string, any]>(([key, value]) => {
        if (Object.keys(value).length === 0) {
          return [key, true];
        }
        return [key, transformFields(value)];
      }),
  );
}`;

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
          Writers.object({
            nullable: `${!action.method.isRequired}`,
          }),
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
      ...(action.kind === DMMF.ModelAction.aggregate ||
      action.kind === DMMF.ModelAction.groupBy
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
      action.kind === DMMF.ModelAction.aggregate
        ? [
            transformFieldsFunctionStatement,
            /* ts */ ` return ctx.prisma.${mapping.collectionName}.${action.kind}({
              ...args,
              ...transformFields(graphqlFields(info as any)),
            });`,
          ]
        : action.kind === DMMF.ModelAction.groupBy
        ? [
            transformFieldsFunctionStatement,
            /* ts */ ` const { count, avg, sum, min, max } = transformFields(
              graphqlFields(info as any)
            );`,
            /* ts */ ` return ctx.prisma.${mapping.collectionName}.${action.kind}({
              ...args,
              ...Object.fromEntries(
                Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
              ),
            });`,
          ]
        : [
            /* ts */ ` return ctx.prisma.${mapping.collectionName}.${
              action.kind
            }(${action.argsTypeName ? "args" : ""});`,
          ],
  };
}
