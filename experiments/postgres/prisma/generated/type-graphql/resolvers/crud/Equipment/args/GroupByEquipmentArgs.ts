import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentOrderByWithAggregationInput } from "../../../inputs/EquipmentOrderByWithAggregationInput";
import { EquipmentScalarWhereWithAggregatesInput } from "../../../inputs/EquipmentScalarWhereWithAggregatesInput";
import { EquipmentWhereInput } from "../../../inputs/EquipmentWhereInput";
import { EquipmentScalarFieldEnum } from "../../../../enums/EquipmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEquipmentArgs {
  @TypeGraphQL.Field(_type => EquipmentWhereInput, {
    nullable: true
  })
  where?: EquipmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EquipmentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EquipmentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EquipmentScalarFieldEnum], {
    nullable: false
  })
  by!: "id"[];

  @TypeGraphQL.Field(_type => EquipmentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EquipmentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
