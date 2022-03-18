import * as TypeGraphQL from "type-graphql";

export enum MainUserScalarFieldEnum {
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
TypeGraphQL.registerEnumType(MainUserScalarFieldEnum, {
  name: "MainUserScalarFieldEnum",
  description: undefined,
});
