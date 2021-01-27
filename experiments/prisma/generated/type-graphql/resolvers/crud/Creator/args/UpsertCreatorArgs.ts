import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CreatorUncheckedCreateInput } from "../../../inputs/CreatorUncheckedCreateInput";
import { CreatorUncheckedUpdateInput } from "../../../inputs/CreatorUncheckedUpdateInput";
import { CreatorWhereUniqueInput } from "../../../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorUncheckedCreateInput, {
    nullable: false
  })
  create!: CreatorUncheckedCreateInput;

  @TypeGraphQL.Field(_type => CreatorUncheckedUpdateInput, {
    nullable: false
  })
  update!: CreatorUncheckedUpdateInput;
}
