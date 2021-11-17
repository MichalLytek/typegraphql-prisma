import * as TypeGraphQL from "type-graphql";

export enum PostOrderByRelevanceFieldEnum {
  uuid = "uuid",
  title = "title",
  subtitle = "subtitle",
  content = "content"
}
TypeGraphQL.registerEnumType(PostOrderByRelevanceFieldEnum, {
  name: "PostOrderByRelevanceFieldEnum",
  description: undefined,
});
