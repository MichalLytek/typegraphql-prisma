import * as TypeGraphQL from "type-graphql";

export enum UserOrderByRelevanceFieldEnum {
  email = "email",
  name = "name",
  aliases = "aliases"
}
TypeGraphQL.registerEnumType(UserOrderByRelevanceFieldEnum, {
  name: "UserOrderByRelevanceFieldEnum",
  description: undefined,
});
