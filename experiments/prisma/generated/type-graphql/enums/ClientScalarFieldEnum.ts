import * as TypeGraphQL from "type-graphql";

export enum ClientScalarFieldEnum {
  id = "id",
  email = "email",
  firstName = "name",
  age = "age",
  accountBalance = "balance",
  amount = "amount",
  role = "role"
}
TypeGraphQL.registerEnumType(ClientScalarFieldEnum, {
  name: "ClientScalarFieldEnum",
  description: undefined,
});
