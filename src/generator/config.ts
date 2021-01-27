import { DMMF } from "./dmmf/types";

export type BaseKeys = keyof Pick<DMMF.ModelMapping, "model" | "plural">;
export const baseKeys: BaseKeys[] = ["model", "plural"];

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
  "create" | "delete" | "update" | "deleteMany" | "updateMany" | "upsert"
>;
export const supportedMutationActions: SupportedMutations[] = [
  "create",
  "delete",
  "update",
  "deleteMany",
  "updateMany",
  "upsert",
];

export const modelsFolderName = "models";
export const enumsFolderName = "enums";
export const inputsFolderName = "inputs";
export const outputsFolderName = "outputs";
export const resolversFolderName = "resolvers";
export const argsFolderName = "args";
export const relationsResolversFolderName = "relations";
export const crudResolversFolderName = "crud";
