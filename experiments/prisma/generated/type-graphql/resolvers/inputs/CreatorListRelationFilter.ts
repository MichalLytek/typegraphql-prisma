import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorWhereInput } from "../inputs/CreatorWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorListRelationFilter {
  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  every?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  some?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  none?: CreatorWhereInput | undefined;
}
