import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  uuid = "uuid",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  published = "published",
  title = "title",
  subtitle = "subtitle",
  content = "content",
  authorId = "authorId",
  editorId = "editorId",
  kind = "kind",
  metadata = "metadata"
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
