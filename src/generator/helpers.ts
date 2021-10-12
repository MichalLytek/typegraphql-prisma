import { DmmfDocument } from "./dmmf/dmmf-document";
import { modelAttributeRegex, fieldAttributeRegex } from "./dmmf/helpers";
import { getMappedOutputTypeName } from "./dmmf/transform";
import { DMMF } from "./dmmf/types";

enum PrismaScalars {
  String = "String",
  Boolean = "Boolean",
  Int = "Int",
  Float = "Float",
  DateTime = "DateTime",
  Json = "Json",
  BigInt = "BigInt",
  Decimal = "Decimal",
  Bytes = "Bytes",
}

export function noop() {}

export function getFieldTSType(
  dmmfDocument: DmmfDocument,
  typeInfo: DMMF.TypeInfo,
  isRequired: boolean,
  isInputType: boolean,
  modelName?: string,
  typeName?: string,
) {
  let TSType: string = typeInfo.type;
  if (typeInfo.location === "scalar") {
    TSType = mapScalarToTSType(typeInfo.type, isInputType);
  } else if (
    typeInfo.location === "inputObjectTypes" ||
    typeInfo.location === "outputObjectTypes"
  ) {
    if (!dmmfDocument.isModelName(typeInfo.type) && (!typeName || !modelName)) {
      TSType = getInputTypeName(typeInfo.type, dmmfDocument);
    }
  } else if (typeInfo.location === "enumTypes") {
    const enumDef = dmmfDocument.enums.find(
      it => it.typeName == typeInfo.type,
    )!;
    TSType = enumDef.valuesMap.map(({ value }) => `"${value}"`).join(" | ");
  } else {
    throw new Error(`Unsupported field type location: ${typeInfo.location}`);
  }
  if (typeInfo.isList) {
    if (TSType.includes(" ")) {
      TSType = `Array<${TSType}>`;
    } else {
      TSType += "[]";
    }
  }
  if (!isRequired) {
    if (isInputType) {
      TSType += " | undefined";
    } else {
      TSType += " | null";
    }
  }
  return TSType;
}

export function mapScalarToTSType(scalar: string, isInputType: boolean) {
  switch (scalar) {
    case PrismaScalars.String: {
      return "string";
    }
    case PrismaScalars.Boolean: {
      return "boolean";
    }
    case PrismaScalars.Int:
    case PrismaScalars.Float: {
      return "number";
    }
    case PrismaScalars.DateTime: {
      return "Date";
    }
    case PrismaScalars.Json:
      return isInputType ? "Prisma.InputJsonValue" : "Prisma.JsonValue";
    case PrismaScalars.BigInt: {
      return "bigint";
    }
    case PrismaScalars.Decimal: {
      return "Prisma.Decimal";
    }
    case PrismaScalars.Bytes: {
      return "Buffer";
    }
    default:
      throw new Error(`Unrecognized scalar type: ${scalar}`);
  }
}

export function getTypeGraphQLType(
  typeInfo: DMMF.TypeInfo,
  dmmfDocument: DmmfDocument,
  modelName?: string,
  typeName?: string,
  isIdField?: boolean,
) {
  let GraphQLType: string = typeInfo.type;
  if (typeInfo.location === "scalar") {
    GraphQLType = mapScalarToTypeGraphQLType(
      typeInfo.type,
      dmmfDocument.options.emitIdAsIDType,
      isIdField,
    );
  } else if (
    (typeInfo.location === "inputObjectTypes" ||
      typeInfo.location === "outputObjectTypes") &&
    (!typeName || !modelName) &&
    !dmmfDocument.isModelName(typeInfo.type)
  ) {
    GraphQLType = getInputTypeName(typeInfo.type, dmmfDocument);
  }
  if (typeInfo.isList) {
    GraphQLType = `[${GraphQLType}]`;
  }
  return GraphQLType;
}

export function mapScalarToTypeGraphQLType(
  scalar: string,
  emitIdAsIDType: boolean | undefined,
  isIdField?: boolean,
) {
  if (emitIdAsIDType && isIdField) {
    return `TypeGraphQL.ID`;
  }
  switch (scalar) {
    case PrismaScalars.String:
    case PrismaScalars.Boolean: {
      return scalar;
    }
    case PrismaScalars.Int:
    case PrismaScalars.Float: {
      return `TypeGraphQL.${scalar}`;
    }
    case PrismaScalars.DateTime: {
      return "Date";
    }
    case PrismaScalars.Json: {
      return `GraphQLScalars.JSONResolver`;
    }
    case PrismaScalars.BigInt: {
      return "GraphQLScalars.BigIntResolver";
    }
    case PrismaScalars.Decimal: {
      return "DecimalJSScalar";
    }
    case PrismaScalars.Bytes: {
      return "GraphQLScalars.ByteResolver";
    }
    default: {
      throw new Error(`Unrecognized scalar type: ${scalar}`);
    }
  }
}

export function camelCase(str: string) {
  return str[0].toLowerCase() + str.slice(1);
}

export function pascalCase(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

function getInputKeywordPhrasePosition(inputTypeName: string) {
  const inputParseResult = [
    "Unchecked",
    "Create",
    "CountOrderBy",
    "AvgOrderBy",
    "MaxOrderBy",
    "MinOrderBy",
    "SumOrderBy",
    "OrderBy",
    "Update",
    "Upsert",
    "ScalarWhere",
    "Where",
    "ListRelationFilter",
    "RelationFilter",
    "Filter",
  ]
    .map(inputKeyword => inputTypeName.search(inputKeyword))
    .filter(position => position >= 0);

  if (inputParseResult.length === 0) {
    return;
  }

  const keywordPhrasePosition = inputParseResult[0];
  return keywordPhrasePosition;
}

export function getModelNameFromInputType(inputTypeName: string) {
  const keywordPhrasePosition = getInputKeywordPhrasePosition(inputTypeName);
  if (!keywordPhrasePosition) {
    return;
  }
  const modelName = inputTypeName.slice(0, keywordPhrasePosition);
  return modelName;
}

export function getInputTypeName(
  originalInputName: string,
  dmmfDocument: DmmfDocument,
): string {
  const keywordPhrasePosition =
    getInputKeywordPhrasePosition(originalInputName);
  if (!keywordPhrasePosition) {
    return originalInputName;
  }

  const modelName = originalInputName.slice(0, keywordPhrasePosition);
  const typeNameRest = originalInputName.slice(keywordPhrasePosition);
  const modelTypeName = dmmfDocument.getModelTypeName(modelName);
  if (!modelTypeName) {
    return originalInputName;
  }

  return `${modelTypeName}${typeNameRest}`;
}

export function cleanDocsString(
  documentation: string | undefined,
): string | undefined {
  if (!documentation) {
    return;
  }
  let cleanedDocs = documentation;
  cleanedDocs = cleanedDocs.replace(modelAttributeRegex, "");
  cleanedDocs = cleanedDocs.replace(fieldAttributeRegex, "");
  cleanedDocs = cleanedDocs.split('"').join('\\"');
  if (cleanedDocs.endsWith("\r")) {
    cleanedDocs = cleanedDocs.slice(0, -1);
  }
  if (cleanedDocs.endsWith("\\r")) {
    cleanedDocs = cleanedDocs.slice(0, -2);
  }
  if (cleanedDocs.endsWith("\n")) {
    cleanedDocs = cleanedDocs.slice(0, -1);
  }
  if (cleanedDocs.endsWith("\\n")) {
    cleanedDocs = cleanedDocs.slice(0, -2);
  }
  return cleanedDocs;
}

export function convertNewLines(str: string) {
  return str.split("\\n").join("\n");
}

export function toUnixPath(maybeWindowsPath: string) {
  return maybeWindowsPath.split("\\").join("/");
}
