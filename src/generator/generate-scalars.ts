import { SourceFile } from "ts-morph";
import {
  generateGraphQLScalarTypeImport,
  generatePrismaNamespaceImport,
} from "./imports";

import { GeneratorOptions } from "./options";

export function generateCustomScalars(
  sourceFile: SourceFile,
  options: GeneratorOptions,
) {
  generatePrismaNamespaceImport(sourceFile, options);
  generateGraphQLScalarTypeImport(sourceFile);

  sourceFile.addStatements(/* ts */ `
    export const DecimalJSScalar = new GraphQLScalarType({
      name: "Decimal",
      description: "GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library.",
      serialize: (value: unknown) => {
        if (!(value instanceof Prisma.Decimal)) {
          throw new Error(\`[DecimalError] Invalid argument: \${typeof value}. Expected Prisma.Decimal instance.\`);
        }
        return value.toString();
      },
      parseValue: (value: unknown) => {
        if (!(typeof value === "string")) {
          throw new Error(\`[DecimalError] Invalid argument: \${typeof value}. Expected string.\`);
        }
        return new Prisma.Decimal(value);
      },
    });
  `);
}
