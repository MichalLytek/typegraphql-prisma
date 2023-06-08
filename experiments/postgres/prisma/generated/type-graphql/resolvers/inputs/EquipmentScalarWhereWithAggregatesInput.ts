import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EquipmentScalarWhereWithAggregatesInput")
export class EquipmentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EquipmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EquipmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EquipmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EquipmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EquipmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EquipmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}
