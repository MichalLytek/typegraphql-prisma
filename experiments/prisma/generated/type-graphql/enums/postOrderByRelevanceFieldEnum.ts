import * as TypeGraphQL from "type-graphql";

export enum postOrderByRelevanceFieldEnum {
  uuid = "uuid",
  title = "title",
  subtitle = "subtitle",
  content = "content"
}
TypeGraphQL.registerEnumType(postOrderByRelevanceFieldEnum, {
  name: "postOrderByRelevanceFieldEnum",
  description: undefined,
});
