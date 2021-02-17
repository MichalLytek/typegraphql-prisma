import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryOrderByInput } from "../../../inputs/CategoryOrderByInput";
import { CategoryScalarWhereWithAggregatesInput } from "../../../inputs/CategoryScalarWhereWithAggregatesInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { CategoryScalarFieldEnum } from "../../../../enums/CategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoryOrderByInput], {
    nullable: true
  })
  orderBy?: CategoryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"name" | "slug" | "number">;

  @TypeGraphQL.Field(_type => CategoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CategoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
