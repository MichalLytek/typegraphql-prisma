import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("HiddenScalarWhereWithAggregatesInput")
export class HiddenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [HiddenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: HiddenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HiddenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: HiddenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [HiddenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: HiddenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}
