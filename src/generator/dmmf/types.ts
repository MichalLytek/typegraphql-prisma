export namespace DMMF {
  export interface Document {
    datamodel: Datamodel;
    schema: Schema;
    modelMappings: ModelMapping[];
  }
  export interface Enum {
    name: string;
    // values: string[];
    dbName?: string | null;
    // documentation?: string;
    // additional props
    typeName: string;
    docs: string | undefined;
    valuesMap: Array<{ name: string; value: string }>;
  }
  export interface Datamodel {
    models: Model[];
    enums: Enum[];
  }
  export interface UniqueIndex {
    name: string;
    fields: string[];
  }
  export interface Model {
    name: string;
    isEmbedded: boolean;
    dbName: string | null;
    fields: Field[];
    // fieldMap?: Record<string, Field>;
    uniqueFields: string[][];
    uniqueIndexes: UniqueIndex[];
    // documentation?: string;
    idFields: string[];
    // [key: string]: any;
    // additional props
    typeName: string;
    docs: string | undefined;
  }
  export type FieldKind = "scalar" | "object" | "enum";
  export type FieldNamespace = "model" | "prisma";
  export type FieldLocation =
    | "scalar"
    | "inputObjectTypes"
    | "outputObjectTypes"
    | "enumTypes";
  export interface Field {
    // kind: FieldKind;
    name: string;
    isRequired: boolean;
    isList: boolean;
    isUnique: boolean;
    isId: boolean;
    type: string;
    dbNames?: string[] | null;
    isGenerated: boolean;
    hasDefaultValue: boolean;
    default?: FieldDefault | string | boolean | number;
    relationToFields?: any[];
    relationOnDelete?: string;
    relationName?: string;
    // documentation?: string;
    // [key: string]: any;
    // additional props
    location: FieldLocation;
    typeFieldAlias?: string;
    typeGraphQLType: string;
    fieldTSType: string;
    docs: string | undefined;
    isOmitted: { input: boolean; output: boolean };
  }
  export interface FieldDefault {
    name: string;
    args: any[];
  }
  export interface Schema {
    rootQueryType?: string;
    rootMutationType?: string;
    inputTypes: InputType[];
    outputTypes: OutputType[];
    enums: Enum[];
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
    // inputTypes: SchemaArgInputType[];
    // additional props
    selectedInputType: SchemaArgInputType;
    typeName: string;
    typeGraphQLType: string;
    fieldTSType: string;
    hasMappedName: boolean;
  }
  export interface OutputType {
    name: string;
    // fields: SchemaField[];
    // fieldMap?: Record<string, SchemaField>;
    isEmbedded?: boolean;
    // additional props
    fields: OutputSchemaField[];
    modelName: string; // ???
    typeName: string;
  }
  export interface SchemaField {
    name: string;
    // isNullable?: boolean;
    // outputType: {
    //   type: string | OutputType | Enum;
    //   isList: boolean;
    //   isRequired: boolean;
    //   kind: FieldKind;
    // };
    outputType: TypeInfo;
    args: SchemaArg[];
    deprecation?: SchemaFieldDeprecation;
    // additional props
    typeGraphQLType: string;
    fieldTSType: string;
    isRequired: boolean;
  }
  export interface SchemaFieldDeprecation {
    sinceVersion: string;
    reason: string;
    plannedRemovalVersion: string;
  }
  // named subtype of SchemaField->outputType
  export interface TypeInfo {
    // type: string | OutputType | Enum;
    type: string;
    isList: boolean;
    location: FieldLocation;
    namespace?: FieldNamespace;
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
    fields: SchemaArg[];
    // fieldMap?: Record<string, SchemaArg>;
    // additional props
    typeName: string;
  }
  export interface ModelMapping {
    model: string;
    plural: string;
    // findUnique?: string | null;
    // findFirst?: string | null;
    // findMany?: string | null;
    // create?: string | null;
    // createMany?: string | null;
    // update?: string | null;
    // updateMany?: string | null;
    // upsert?: string | null;
    // delete?: string | null;
    // deleteMany?: string | null;
    // aggregate?: string | null;
    // groupBy?: string | null;
    // count?: string | null;

    // additional props
    actions: Action[];
    collectionName: string;
    resolverName: string;
    modelTypeName: string;
  }
  // additional type
  export interface Action {
    name: string;
    fieldName: string;
    kind: ModelAction;
    operation: "Query" | "Mutation";
    method: OutputSchemaField;
    argsTypeName: string | undefined;
    outputTypeName: string;
    actionResolverName: string;
    returnTSType: string;
    typeGraphQLType: string;
  }
  export enum ModelAction {
    findUnique = "findUnique",
    findFirst = "findFirst",
    findMany = "findMany",
    create = "create",
    createMany = "createMany",
    update = "update",
    updateMany = "updateMany",
    upsert = "upsert",
    delete = "delete",
    deleteMany = "deleteMany",
    groupBy = "groupBy",
    // count = "count",
    aggregate = "aggregate",
  }
  // additional type
  export interface RelationModel {
    model: Model;
    outputType: OutputType;
    relationFields: RelationField[];
    resolverName: string;
  }
  // additional type
  export interface RelationField extends Field {
    outputTypeField: OutputSchemaField;
    argsTypeName: string | undefined;
  }
}
