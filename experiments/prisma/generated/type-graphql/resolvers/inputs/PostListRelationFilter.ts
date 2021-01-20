import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostListRelationFilter {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  every?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  some?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  none?: PostWhereInput | undefined;
}
