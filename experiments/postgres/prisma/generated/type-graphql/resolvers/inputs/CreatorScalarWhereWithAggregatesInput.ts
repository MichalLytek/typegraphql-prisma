import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CreatorScalarWhereWithAggregatesInput")
export class CreatorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CreatorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CreatorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CreatorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CreatorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
