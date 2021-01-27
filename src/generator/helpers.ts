import { DmmfDocument } from "./dmmf/dmmf-document";
import { modelAttributeRegex, fieldAttributeRegex } from "./dmmf/helpers";
import { DMMF } from "./dmmf/types";

enum PrismaScalars {
  String = "String",
  Boolean = "Boolean",
  Int = "Int",
  Float = "Float",
  DateTime = "DateTime",
  Json = "Json",
  // TODO: add native types
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
  let TSType: string;
  if (typeInfo.location === "scalar") {
    TSType = mapScalarToTSType(typeInfo.type, isInputType);
  } else if (
    typeInfo.location === "inputObjectTypes" ||
    typeInfo.location === "outputObjectTypes"
  ) {
    if (dmmfDocument.isModelName(typeInfo.type)) {
      TSType = dmmfDocument.getModelTypeName(typeInfo.type)!;
    } else {
      TSType =
        !typeName || !modelName
          ? getInputTypeName(typeInfo.type, dmmfDocument)
          : typeInfo.type.replace(modelName, typeName);
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
    // TODO: handle native types
    default:
      throw new Error(`Unrecognized scalar type: ${scalar}`);
  }
}

export function getTypeGraphQLType(
  typeInfo: DMMF.TypeInfo,
  dmmfDocument: DmmfDocument,
  modelName?: string,
  typeName?: string,
) {
  let GraphQLType: string;
  if (typeInfo.location === "scalar") {
    GraphQLType = mapScalarToTypeGraphQLType(typeInfo.type);
  } else if (
    typeInfo.location === "inputObjectTypes" ||
    typeInfo.location === "outputObjectTypes"
  ) {
    if (dmmfDocument.isModelName(typeInfo.type)) {
      GraphQLType = dmmfDocument.getModelTypeName(typeInfo.type)!;
    } else {
      GraphQLType =
        !typeName || !modelName
          ? getInputTypeName(typeInfo.type, dmmfDocument)
          : typeInfo.type.replace(modelName, typeName);
    }
  } else {
    GraphQLType = typeInfo.type;
  }
  if (typeInfo.isList) {
    GraphQLType = `[${GraphQLType}]`;
  }
  return GraphQLType;
}

export function mapScalarToTypeGraphQLType(scalar: string) {
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
      return `GraphQLJSON`;
    }
    // TODO: handle native types
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
  const keywordPhrasePosition = getInputKeywordPhrasePosition(
    originalInputName,
  );
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
  cleanedDocs = cleanedDocs.split("\r").join("");
  cleanedDocs = cleanedDocs.split("\\r").join("");
  cleanedDocs = cleanedDocs.split("\n").join("");
  cleanedDocs = cleanedDocs.split("\\n").join("");
  return cleanedDocs;
}

export function toUnixPath(maybeWindowsPath: string) {
  return maybeWindowsPath.split("\\").join("/");
}
