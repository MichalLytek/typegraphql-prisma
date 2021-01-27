import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorUncheckedCreateInput } from "../../../inputs/DirectorUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDirectorArgs {
  @TypeGraphQL.Field(_type => DirectorUncheckedCreateInput, {
    nullable: false
  })
  data!: DirectorUncheckedCreateInput;
}
