import * as TypeGraphQL from "type-graphql";

export enum DirectorOrderByRelevanceFieldEnum {
  firstName = "firstName",
  lastName = "lastName"
}
TypeGraphQL.registerEnumType(DirectorOrderByRelevanceFieldEnum, {
  name: "DirectorOrderByRelevanceFieldEnum",
  description: undefined,
});
