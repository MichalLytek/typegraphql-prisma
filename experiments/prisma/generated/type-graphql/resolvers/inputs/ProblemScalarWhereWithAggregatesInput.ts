import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProblemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProblemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProblemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProblemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  problemText?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  creatorId?: IntNullableWithAggregatesFilter | undefined;
}
