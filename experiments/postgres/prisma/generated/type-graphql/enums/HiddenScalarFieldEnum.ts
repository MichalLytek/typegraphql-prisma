import * as TypeGraphQL from "type-graphql";

export enum HiddenScalarFieldEnum {
  id = "id",
  name = "name"
}
TypeGraphQL.registerEnumType(HiddenScalarFieldEnum, {
  name: "HiddenScalarFieldEnum",
  description: undefined,
});
