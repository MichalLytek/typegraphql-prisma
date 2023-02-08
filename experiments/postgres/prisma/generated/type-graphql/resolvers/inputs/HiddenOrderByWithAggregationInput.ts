import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { HiddenCountOrderByAggregateInput } from "../inputs/HiddenCountOrderByAggregateInput";
import { HiddenMaxOrderByAggregateInput } from "../inputs/HiddenMaxOrderByAggregateInput";
import { HiddenMinOrderByAggregateInput } from "../inputs/HiddenMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("HiddenOrderByWithAggregationInput", {
  isAbstract: true
})
export class HiddenOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => HiddenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: HiddenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HiddenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: HiddenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => HiddenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: HiddenMinOrderByAggregateInput | undefined;
}
