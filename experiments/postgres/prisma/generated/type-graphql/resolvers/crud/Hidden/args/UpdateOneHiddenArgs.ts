import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenUpdateInput } from "../../../inputs/HiddenUpdateInput";
import { HiddenWhereUniqueInput } from "../../../inputs/HiddenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneHiddenArgs {
  @TypeGraphQL.Field(_type => HiddenUpdateInput, {
    nullable: false
  })
  data!: HiddenUpdateInput;

  @TypeGraphQL.Field(_type => HiddenWhereUniqueInput, {
    nullable: false
  })
  where!: HiddenWhereUniqueInput;
}
