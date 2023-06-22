import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { EquipmentCountOrderByAggregateInput } from "../inputs/EquipmentCountOrderByAggregateInput";
import { EquipmentMaxOrderByAggregateInput } from "../inputs/EquipmentMaxOrderByAggregateInput";
import { EquipmentMinOrderByAggregateInput } from "../inputs/EquipmentMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EquipmentOrderByWithAggregationInput", {})
export class EquipmentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => EquipmentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EquipmentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EquipmentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EquipmentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EquipmentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EquipmentMinOrderByAggregateInput | undefined;
}
