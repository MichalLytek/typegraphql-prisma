import { SourceFile } from "ts-morph";
import {
  generateGraphQLFieldsImport,
  generateGraphQLInfoImport,
} from "./imports";
import { GeneratorOptions } from "./options";

export function generateHelpersFile(
  sourceFile: SourceFile,
  options: GeneratorOptions,
) {
  generateGraphQLInfoImport(sourceFile);
  generateGraphQLFieldsImport(sourceFile);

  sourceFile.addStatements(/* ts */ `
    export function transformInfoIntoPrismaArgs(info: GraphQLResolveInfo): Record<string, any> {
      const fields: Record<string, any> = graphqlFields(
        // suppress GraphQLResolveInfo types issue
        info as any,
        {},
        {
          excludedFields: ['__typename'],
          processArguments: true,
        }
      );
      return transformFields(fields);
    }
  `);

  sourceFile.addStatements(/* ts */ `
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            if ("__arguments" in value) {
              return [key, Object.fromEntries(
                value.__arguments.map((argument: object) => {
                  const [[key, { value }]] = Object.entries(argument);
                  return [key, value];
                })
              )];
            }
            return [key, transformFields(value)];
          }),
      );
    }
  `);

  sourceFile.addStatements(/* ts */ `
    export function getPrismaFromContext(context: any) {
      const prismaClient = context["${options.contextPrismaKey}"];
      if (!prismaClient) {
        throw new Error("Unable to find Prisma Client in GraphQL context. Please provide it under the \`context[\\"${options.contextPrismaKey}\\"]\` key.");
      }
      return prismaClient;
    }
  `);

  sourceFile.addStatements(/* ts */ `
    export function transformCountFieldIntoSelectRelationsCount(_count: object) {
      return {
        include: {
          _count: {
            select: {
              ...Object.fromEntries(
                Object.entries(_count).filter(([_, v]) => v != null)
              ),
            }
          },
        },
      }
    }
  `);
}
