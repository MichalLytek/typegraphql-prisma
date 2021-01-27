import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CategoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  number?: IntWithAggregatesFilter | undefined;
}
