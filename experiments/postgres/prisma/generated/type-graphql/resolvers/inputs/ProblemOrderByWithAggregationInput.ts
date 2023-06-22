import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemAvgOrderByAggregateInput } from "../inputs/ProblemAvgOrderByAggregateInput";
import { ProblemCountOrderByAggregateInput } from "../inputs/ProblemCountOrderByAggregateInput";
import { ProblemMaxOrderByAggregateInput } from "../inputs/ProblemMaxOrderByAggregateInput";
import { ProblemMinOrderByAggregateInput } from "../inputs/ProblemMinOrderByAggregateInput";
import { ProblemSumOrderByAggregateInput } from "../inputs/ProblemSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProblemOrderByWithAggregationInput", {})
export class ProblemOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  problemText?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  creatorId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => ProblemCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProblemCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProblemAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProblemAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProblemMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProblemMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProblemMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProblemMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProblemSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProblemSumOrderByAggregateInput | undefined;
}
