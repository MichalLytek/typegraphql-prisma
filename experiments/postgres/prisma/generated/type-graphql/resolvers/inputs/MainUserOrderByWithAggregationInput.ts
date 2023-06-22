import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserAvgOrderByAggregateInput } from "../inputs/MainUserAvgOrderByAggregateInput";
import { MainUserCountOrderByAggregateInput } from "../inputs/MainUserCountOrderByAggregateInput";
import { MainUserMaxOrderByAggregateInput } from "../inputs/MainUserMaxOrderByAggregateInput";
import { MainUserMinOrderByAggregateInput } from "../inputs/MainUserMinOrderByAggregateInput";
import { MainUserSumOrderByAggregateInput } from "../inputs/MainUserSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MainUserOrderByWithAggregationInput", {})
export class MainUserOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  age?: "asc" | "desc" | undefined;

  balance?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  grades?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  aliases?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MainUserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MainUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MainUserAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MainUserAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MainUserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MainUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MainUserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MainUserMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MainUserSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MainUserSumOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: SortOrderInput | undefined) {
    this.name = name;
  }

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: "asc" | "desc" | undefined) {
    this.balance = balance;
  }
}
