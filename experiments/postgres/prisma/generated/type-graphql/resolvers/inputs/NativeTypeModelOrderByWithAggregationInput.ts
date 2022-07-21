import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NativeTypeModelAvgOrderByAggregateInput } from "../inputs/NativeTypeModelAvgOrderByAggregateInput";
import { NativeTypeModelCountOrderByAggregateInput } from "../inputs/NativeTypeModelCountOrderByAggregateInput";
import { NativeTypeModelMaxOrderByAggregateInput } from "../inputs/NativeTypeModelMaxOrderByAggregateInput";
import { NativeTypeModelMinOrderByAggregateInput } from "../inputs/NativeTypeModelMinOrderByAggregateInput";
import { NativeTypeModelSumOrderByAggregateInput } from "../inputs/NativeTypeModelSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NativeTypeModelOrderByWithAggregationInput", {
  isAbstract: true
})
export class NativeTypeModelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  bigInt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  byteA?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  decimal?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NativeTypeModelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: NativeTypeModelAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NativeTypeModelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NativeTypeModelMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: NativeTypeModelSumOrderByAggregateInput | undefined;
}
