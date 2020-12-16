import * as TypeGraphQL from "type-graphql";

export enum CategoryScalarFieldEnum {
  name = "name",
  slug = "slug",
  number = "number"
}
TypeGraphQL.registerEnumType(CategoryScalarFieldEnum, {
  name: "CategoryScalarFieldEnum",
  description: undefined,
});
