import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PostOrderByWithRelationAndSearchRelevanceInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
import { PostScalarFieldEnum } from "../../../../enums/PostScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class MainUserPostsArgs {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PostOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PostScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"uuid" | "createdAt" | "updatedAt" | "published" | "title" | "subtitle" | "content" | "authorId" | "editorId" | "kind" | "metadata"> | undefined;
}
