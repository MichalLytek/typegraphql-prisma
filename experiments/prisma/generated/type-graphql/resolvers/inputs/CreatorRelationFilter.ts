import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorWhereInput } from "../inputs/CreatorWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorRelationFilter {
  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  is?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  isNot?: CreatorWhereInput | undefined;
}
