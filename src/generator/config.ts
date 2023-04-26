import { DMMF } from "./dmmf/types";

// export type BaseKeys = keyof Pick<DMMF.ModelMapping, "model" | "plural">;
// export const baseKeys: BaseKeys[] = ["model", "plural"];
export type BaseKeys = keyof Pick<DMMF.ModelMapping, "modelName">;
export const baseKeys: BaseKeys[] = ["modelName"];

export type ModelKeys = keyof Exclude<DMMF.ModelMapping, BaseKeys>;

export const supportedQueryActions = [
  "findUnique",
  "findUniqueOrThrow",
  "findFirst",
  "findFirstOrThrow",
  "findMany",
  "aggregate",
  "groupBy",
] satisfies (keyof typeof DMMF.ModelAction)[];
export type SupportedQueries = (typeof supportedQueryActions)[number];

export const supportedMutationActions = [
  "createOne",
  "createMany",
  "deleteOne",
  "updateOne",
  "deleteMany",
  "updateMany",
  "upsertOne",
] satisfies (keyof typeof DMMF.ModelAction)[];
export type SupportedMutations = (typeof supportedMutationActions)[number];

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
