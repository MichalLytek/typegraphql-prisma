import * as TypeGraphQL from "type-graphql";

export enum MovieScalarFieldEnum {
  directorFirstName = "directorFirstName",
  directorLastName = "directorLastName",
  title = "title"
}
TypeGraphQL.registerEnumType(MovieScalarFieldEnum, {
  name: "MovieScalarFieldEnum",
  description: undefined,
});
