import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenOrderByWithAggregationInput } from "../../../inputs/HiddenOrderByWithAggregationInput";
import { HiddenScalarWhereWithAggregatesInput } from "../../../inputs/HiddenScalarWhereWithAggregatesInput";
import { HiddenWhereInput } from "../../../inputs/HiddenWhereInput";
import { HiddenScalarFieldEnum } from "../../../../enums/HiddenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByHiddenArgs {
  @TypeGraphQL.Field(_type => HiddenWhereInput, {
    nullable: true
  })
  where?: HiddenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HiddenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: HiddenOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [HiddenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => HiddenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: HiddenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
