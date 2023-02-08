import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenCreateInput } from "../../../inputs/HiddenCreateInput";
import { HiddenUpdateInput } from "../../../inputs/HiddenUpdateInput";
import { HiddenWhereUniqueInput } from "../../../inputs/HiddenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneHiddenArgs {
  @TypeGraphQL.Field(_type => HiddenWhereUniqueInput, {
    nullable: false
  })
  where!: HiddenWhereUniqueInput;

  @TypeGraphQL.Field(_type => HiddenCreateInput, {
    nullable: false
  })
  create!: HiddenCreateInput;

  @TypeGraphQL.Field(_type => HiddenUpdateInput, {
    nullable: false
  })
  update!: HiddenUpdateInput;
}
