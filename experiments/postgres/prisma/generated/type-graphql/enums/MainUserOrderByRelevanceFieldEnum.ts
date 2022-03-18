import * as TypeGraphQL from "type-graphql";

export enum MainUserOrderByRelevanceFieldEnum {
  email = "email",
  firstName = "name",
  aliases = "aliases"
}
TypeGraphQL.registerEnumType(MainUserOrderByRelevanceFieldEnum, {
  name: "MainUserOrderByRelevanceFieldEnum",
  description: undefined,
});
