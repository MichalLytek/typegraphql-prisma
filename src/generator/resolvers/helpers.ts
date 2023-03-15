import { OptionalKind, MethodDeclarationStructure, Writers } from "ts-morph";

import { DmmfDocument } from "../dmmf/dmmf-document";
import { DMMF } from "../dmmf/types";
import { GeneratorOptions } from "../options";

export function generateCrudResolverClassMethodDeclaration(
  action: DMMF.Action,
  mapping: DMMF.ModelMapping,
  dmmfDocument: DmmfDocument,
  generatorOptions: GeneratorOptions,
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
      {
        name: "info",
        type: "GraphQLResolveInfo",
        decorators: [{ name: "TypeGraphQL.Info", arguments: [] }],
      },
      ...(!action.argsTypeName
        ? []
        : [
            {
              name: "args",
              type: action.argsTypeName,
              decorators: [
                {
                  name: "TypeGraphQL.Args",
                  arguments: generatorOptions.emitRedundantTypesInfo
                    ? [`_type => ${action.argsTypeName}`]
                    : [],
                },
              ],
            },
          ]),
    ],
    statements:
      action.kind === DMMF.ModelAction.aggregate
        ? [
            /* ts */ ` return getPrismaFromContext(ctx).${mapping.collectionName}.${action.prismaMethod}({
              ...args,
              ...transformInfoIntoPrismaArgs(info),
            });`,
          ]
        : action.kind === DMMF.ModelAction.groupBy
        ? [
            /* ts */ ` const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);`,
            /* ts */ ` return getPrismaFromContext(ctx).${mapping.collectionName}.${action.prismaMethod}({
              ...args,
              ...Object.fromEntries(
                Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
              ),
            });`,
          ]
        : [
            /* ts */ ` const { _count } = transformInfoIntoPrismaArgs(info);
            return getPrismaFromContext(ctx).${mapping.collectionName}.${action.prismaMethod}({
              ...args,
              ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
            });`,
          ],
  };
}
