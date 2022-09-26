import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EquipmentScalarWhereWithAggregatesInput", {
  isAbstract: true
})
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
}
