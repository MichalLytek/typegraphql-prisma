import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostListRelationFilter")
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
