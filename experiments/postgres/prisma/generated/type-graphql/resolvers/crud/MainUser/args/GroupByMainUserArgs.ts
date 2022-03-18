import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserOrderByWithAggregationInput } from "../../../inputs/MainUserOrderByWithAggregationInput";
import { MainUserScalarWhereWithAggregatesInput } from "../../../inputs/MainUserScalarWhereWithAggregatesInput";
import { MainUserWhereInput } from "../../../inputs/MainUserWhereInput";
import { MainUserScalarFieldEnum } from "../../../../enums/MainUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMainUserArgs {
  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MainUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MainUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MainUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "name" | "age" | "balance" | "amount" | "role" | "grades" | "aliases">;

  @TypeGraphQL.Field(_type => MainUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MainUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
