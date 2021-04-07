import * as TypeGraphQL from "type-graphql";

export enum ClientScalarFieldEnum {
  id = "id",
  email = "email",
  firstName = "name",
  age = "age",
  accountBalance = "balance",
  amount = "amount",
  role = "role",
  grades = "grades",
  aliases = "aliases"
}
TypeGraphQL.registerEnumType(ClientScalarFieldEnum, {
  name: "ClientScalarFieldEnum",
  description: undefined,
});
