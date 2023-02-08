import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenWhereUniqueInput } from "../../../inputs/HiddenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueHiddenArgs {
  @TypeGraphQL.Field(_type => HiddenWhereUniqueInput, {
    nullable: false
  })
  where!: HiddenWhereUniqueInput;
}
