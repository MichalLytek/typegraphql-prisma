import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CreatorUncheckedCreateInput } from "../../../inputs/CreatorUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorUncheckedCreateInput, {
    nullable: false
  })
  data!: CreatorUncheckedCreateInput;
}
