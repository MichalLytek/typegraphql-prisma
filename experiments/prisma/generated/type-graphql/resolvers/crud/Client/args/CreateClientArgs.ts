import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientUncheckedCreateInput } from "../../../inputs/ClientUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateClientArgs {
  @TypeGraphQL.Field(_type => ClientUncheckedCreateInput, {
    nullable: false
  })
  data!: ClientUncheckedCreateInput;
}
