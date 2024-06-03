import { InputOmitSetting } from "../config";

export namespace DMMF {
  export interface Document {
    datamodel: Datamodel;
    schema: Schema;
    // mappings: Mappings;
    // additional props:
    modelMappings: ModelMapping[];
  }
  export interface Enum {
    name: string;
    // values: EnumValue[];
    dbName?: string | null;
    // documentation?: string;
    // additional props:
    typeName: string;
    docs: string | undefined;
    valuesMap: Array<{ name: string; value: string }>;
  }
  export interface Datamodel {
    models: Model[];
    enums: Enum[];
    types: Model[];
  }
  export interface UniqueIndex {
    name: string;
    fields: string[];
  }
  export interface PrimaryKey {
    name: string | null;
    fields: string[];
  }
  export interface Model {
    name: string;
    dbName: string | null;
    fields: ModelField[];
    uniqueFields: string[][];
    uniqueIndexes: UniqueIndex[];
    // documentation?: string;
    primaryKey: PrimaryKey | null;
    // isGenerated?: boolean;
    // additional props:
    typeName: string;
    docs: string | undefined;
    plural: string | undefined;
    isOmitted: { output: boolean };
    simpleResolvers: { enable?: boolean };
  }
  export type FieldKind = "scalar" | "object" | "enum" | "unsupported";
  export type FieldNamespace = "model" | "prisma";
  export type FieldLocation =
    | "scalar"
    | "inputObjectTypes"
    | "outputObjectTypes"
    | "enumTypes"
    | "fieldRefTypes";
  // Field
  export interface ModelField {
    // kind: FieldKind;
    name: string;
    isRequired: boolean;
    isList: boolean;
    isUnique: boolean;
    isId: boolean;
    isReadOnly: boolean;
    isGenerated?: boolean;
    isUpdatedAt?: boolean;
    // type: string;
    dbNames?: string[] | null;
    hasDefaultValue: boolean;
    default?: FieldDefault | FieldDefaultScalar | FieldDefaultScalar[];
    relationFromFields?: string[];
    relationToFields?: any[];
    relationOnDelete?: string;
    relationName?: string;
    // documentation?: string;
    // [key: string]: any;
    // additional props:
    type: string;
    location: FieldLocation;
    typeFieldAlias?: string;
    typeGraphQLType: string;
    fieldTSType: string;
    docs: string | undefined;
    isOmitted: { input: boolean | InputOmitSetting[]; output: boolean };
  }
  export interface FieldDefault {
    name: string;
    args: any[];
  }
  export type FieldDefaultScalar = string | boolean | number;
  export interface Schema {
    rootQueryType?: string;
    rootMutationType?: string;
    inputTypes: InputType[];
    outputTypes: OutputType[];
    enums: Enum[];
    // fieldRefTypes: {
    //   prisma?: FieldRefType[];
    // };
  }
  export interface Query {
    name: string;
    args: SchemaArg[];
    output: QueryOutput;
  }
  export interface QueryOutput {
    name: string;
    isRequired: boolean;
    isList: boolean;
  }
  export type TypeRef<AllowedLocations extends FieldLocation> = {
    isList: boolean;
    type: string;
    location: AllowedLocations;
    namespace?: FieldNamespace;
  };
  export type InputTypeRef = TypeRef<
    "scalar" | "inputObjectTypes" | "enumTypes" | "fieldRefTypes"
  >;
  export type ArgType = string | InputType | Enum;
  export interface SchemaArgInputType {
    isList: boolean;
    // type: ArgType;
    location: FieldLocation;
    namespace?: FieldNamespace;
    // additional props
    type: string;
  }
  export interface SchemaArg {
    name: string;
    comment?: string;
    isNullable: boolean;
    isRequired: boolean;
    // inputTypes: InputTypeRef[];
    deprecation?: Deprecation;
    // additional props:
    selectedInputType: SchemaArgInputType;
    typeName: string;
    typeGraphQLType: string;
    fieldTSType: string;
    hasMappedName: boolean;
    isOmitted: boolean;
  }
  export interface OutputType {
    name: string;
    // fields: SchemaField[];
    // additional props:
    fields: OutputSchemaField[];
    typeName: string;
  }
  export interface SchemaField {
    name: string;
    isNullable?: boolean;
    // outputType: OutputTypeRef;
    args: SchemaArg[];
    deprecation?: Deprecation;
    documentation?: string;
    // additional props:
    outputType: TypeInfo;
    typeGraphQLType: string;
    fieldTSType: string;
    isRequired: boolean;
  }
  export type OutputTypeRef = TypeRef<
    "scalar" | "outputObjectTypes" | "enumTypes"
  >;
  export interface Deprecation {
    sinceVersion: string;
    reason: string;
    plannedRemovalVersion?: string;
  }
  // named subtype of SchemaField->outputType
  export interface TypeInfo {
    // type: string | OutputType | SchemaEnum;
    isList: boolean;
    location: FieldLocation;
    namespace?: FieldNamespace;
    // additional props:
    type: string;
  }
  // additional type
  export interface OutputSchemaField extends SchemaField {
    argsTypeName: string | undefined;
  }
  export interface InputType {
    name: string;
    constraints: {
      maxNumFields: number | null;
      minNumFields: number | null;
    };
    meta?: {
      source?: string;
    };
    fields: SchemaArg[];
    // additional props:
    typeName: string;
  }
  export interface FieldRefType {
    name: string;
    allowTypes: FieldRefAllowType[];
    fields: SchemaArg[];
  }
  export type FieldRefAllowType = TypeRef<"scalar" | "enumTypes">;
  export interface ModelMapping {
    // model: string;
    // plural: string;
    // findUnique?: string | null;
    // findUniqueOrThrow?: string | null;
    // findFirst?: string | null;
    // findFirstOrThrow?: string | null;
    // findMany?: string | null;
    // createOne?: string | null;
    // createMany?: string | null;
    // updateOne?: string | null;
    // updateMany?: string | null;
    // upsertOne?: string | null;
    // deleteOne?: string | null;
    // deleteMany?: string | null;
    // aggregate?: string | null;
    // groupBy?: string | null;
    // count?: string | null;
    // findRaw?: string | null;
    // aggregateRaw?: string | null;

    // additional props
    modelName: string;
    actions: Action[];
    collectionName: string;
    resolverName: string;
    modelTypeName: string;
  }
  export enum ModelAction {
    findUnique = "findUnique",
    findUniqueOrThrow = "findUniqueOrThrow",
    findFirst = "findFirst",
    findFirstOrThrow = "findFirstOrThrow",
    findMany = "findMany",
    createOne = "createOne",
    createMany = "createMany",
    updateOne = "updateOne",
    updateMany = "updateMany",
    upsertOne = "upsertOne",
    deleteOne = "deleteOne",
    deleteMany = "deleteMany",
    groupBy = "groupBy",
    // count = "count",
    aggregate = "aggregate",
    findRaw = "findRaw",
    aggregateRaw = "aggregateRaw",
  }
  // additional type
  export interface Action {
    name: string;
    fieldName: string;
    kind: ModelAction;
    operation: "Query" | "Mutation";
    prismaMethod: string;
    method: OutputSchemaField;
    argsTypeName: string | undefined;
    outputTypeName: string;
    actionResolverName: string;
    returnTSType: string;
    typeGraphQLType: string;
  }
  // additional type
  export interface RelationModel {
    model: Model;
    outputType: OutputType;
    relationFields: RelationField[];
    resolverName: string;
  }
  // additional type
  export interface RelationField extends ModelField {
    outputTypeField: OutputSchemaField;
    argsTypeName: string | undefined;
  }
}
