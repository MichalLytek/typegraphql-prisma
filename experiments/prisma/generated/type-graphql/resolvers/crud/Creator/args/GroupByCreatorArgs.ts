import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CreatorOrderByInput } from "../../../inputs/CreatorOrderByInput";
import { CreatorScalarWhereWithAggregatesInput } from "../../../inputs/CreatorScalarWhereWithAggregatesInput";
import { CreatorWhereInput } from "../../../inputs/CreatorWhereInput";
import { CreatorScalarFieldEnum } from "../../../../enums/CreatorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CreatorOrderByInput], {
    nullable: true
  })
  orderBy?: CreatorOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => CreatorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CreatorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
