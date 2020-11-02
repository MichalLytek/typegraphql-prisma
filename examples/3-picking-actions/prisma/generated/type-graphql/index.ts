import { NonEmptyArray } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";

export * from "./enums";
export * from "./models";
export * from "./resolvers/crud";
export * from "./resolvers/relations";
export * from "./resolvers/inputs";
export * from "./resolvers/outputs";

export const resolvers = [...Object.values(crudResolvers), ...Object.values(relationResolvers)] as unknown as NonEmptyArray<Function>;

export { crudResolvers, relationResolvers };
