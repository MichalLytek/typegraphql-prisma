import * as TypeGraphQL from "type-graphql";

export enum MovieOrderByRelevanceFieldEnum {
  directorFirstName = "directorFirstName",
  directorLastName = "directorLastName",
  title = "title"
}
TypeGraphQL.registerEnumType(MovieOrderByRelevanceFieldEnum, {
  name: "MovieOrderByRelevanceFieldEnum",
  description: undefined,
});
