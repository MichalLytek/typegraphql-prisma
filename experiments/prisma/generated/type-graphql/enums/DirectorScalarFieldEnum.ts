import * as TypeGraphQL from "type-graphql";

export enum DirectorScalarFieldEnum {
  firstName = "firstName",
  lastName = "lastName"
}
TypeGraphQL.registerEnumType(DirectorScalarFieldEnum, {
  name: "DirectorScalarFieldEnum",
  description: undefined,
});
