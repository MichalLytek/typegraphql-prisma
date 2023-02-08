import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenCreateInput } from "../../../inputs/HiddenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneHiddenArgs {
  @TypeGraphQL.Field(_type => HiddenCreateInput, {
    nullable: false
  })
  data!: HiddenCreateInput;
}
