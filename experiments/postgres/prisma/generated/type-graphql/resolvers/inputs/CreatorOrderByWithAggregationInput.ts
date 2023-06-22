import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorAvgOrderByAggregateInput } from "../inputs/CreatorAvgOrderByAggregateInput";
import { CreatorCountOrderByAggregateInput } from "../inputs/CreatorCountOrderByAggregateInput";
import { CreatorMaxOrderByAggregateInput } from "../inputs/CreatorMaxOrderByAggregateInput";
import { CreatorMinOrderByAggregateInput } from "../inputs/CreatorMinOrderByAggregateInput";
import { CreatorSumOrderByAggregateInput } from "../inputs/CreatorSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CreatorOrderByWithAggregationInput", {})
export class CreatorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CreatorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CreatorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreatorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CreatorAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreatorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CreatorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreatorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CreatorMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreatorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CreatorSumOrderByAggregateInput | undefined;
}
