import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PostOrderByInput } from "../../../inputs/PostOrderByInput";
import { PostScalarWhereWithAggregatesInput } from "../../../inputs/PostScalarWhereWithAggregatesInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostScalarFieldEnum } from "../../../../enums/PostScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostArgs {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostOrderByInput], {
    nullable: true
  })
  orderBy?: PostOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"uuid" | "createdAt" | "updatedAt" | "published" | "title" | "subtitle" | "content" | "authorId" | "editorId" | "kind" | "metadata">;

  @TypeGraphQL.Field(_type => PostScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
