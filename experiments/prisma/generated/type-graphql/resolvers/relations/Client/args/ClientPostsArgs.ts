import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PostOrderByInput } from "../../../inputs/PostOrderByInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
import { PostScalarFieldEnum } from "../../../../enums/PostScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ClientPostsArgs {
  @TypeGraphQL.Field(_type => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostOrderByInput], { nullable: true })
  orderBy?: PostOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, { nullable: true })
  cursor?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PostScalarFieldEnum], { nullable: true })
  distinct?: Array<"uuid" | "createdAt" | "updatedAt" | "published" | "title" | "subtitle" | "content" | "authorId" | "editorId" | "kind" | "metadata"> | undefined;
}
