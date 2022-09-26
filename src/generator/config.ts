import { DMMF } from "./dmmf/types";

// export type BaseKeys = keyof Pick<DMMF.ModelMapping, "model" | "plural">;
// export const baseKeys: BaseKeys[] = ["model", "plural"];
export type BaseKeys = keyof Pick<DMMF.ModelMapping, "modelName">;
export const baseKeys: BaseKeys[] = ["modelName"];

export type ModelKeys = keyof Exclude<DMMF.ModelMapping, BaseKeys>;

export type SupportedQueries = keyof Pick<
  typeof DMMF.ModelAction,
  "findUnique" | "findFirst" | "findMany" | "aggregate" | "groupBy"
>;
export const supportedQueryActions: SupportedQueries[] = [
  "findUnique",
  "findFirst",
  "findMany",
  "aggregate",
  "groupBy",
];

export type SupportedMutations = keyof Pick<
  typeof DMMF.ModelAction,
  | "createOne"
  | "createMany"
  | "deleteOne"
  | "updateOne"
  | "deleteMany"
  | "updateMany"
  | "upsertOne"
>;
export const supportedMutationActions: SupportedMutations[] = [
  "createOne",
  "createMany",
  "deleteOne",
  "updateOne",
  "deleteMany",
  "updateMany",
  "upsertOne",
];

export const modelsFolderName = "models";
export const enumsFolderName = "enums";
export const inputsFolderName = "inputs";
export const outputsFolderName = "outputs";
export const resolversFolderName = "resolvers";
export const argsFolderName = "args";
export const relationsResolversFolderName = "relations";
export const crudResolversFolderName = "crud";

export enum InputOmitSetting {
  Create = "create",
  Update = "update",
  Where = "where",
  OrderBy = "orderBy",
}
