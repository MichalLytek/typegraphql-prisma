import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorListRelationFilter } from "../inputs/CreatorListRelationFilter";
import { CreatorRelationFilter } from "../inputs/CreatorRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemWhereInput {
  @TypeGraphQL.Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  AND?: ProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  OR?: ProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  NOT?: ProblemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  problemText?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CreatorListRelationFilter, {
    nullable: true
  })
  likedBy?: CreatorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CreatorRelationFilter, {
    nullable: true
  })
  creator?: CreatorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  creatorId?: IntNullableFilter | undefined;
}
