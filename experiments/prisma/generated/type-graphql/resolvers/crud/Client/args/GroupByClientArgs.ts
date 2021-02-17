import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientOrderByInput } from "../../../inputs/ClientOrderByInput";
import { ClientScalarWhereWithAggregatesInput } from "../../../inputs/ClientScalarWhereWithAggregatesInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
import { ClientScalarFieldEnum } from "../../../../enums/ClientScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByClientArgs {
  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  where?: ClientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ClientOrderByInput], {
    nullable: true
  })
  orderBy?: ClientOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "name" | "age" | "balance" | "amount" | "role">;

  @TypeGraphQL.Field(_type => ClientScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ClientScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
