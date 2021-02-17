import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientCreateInput } from "../../../inputs/ClientCreateInput";

@TypeGraphQL.ArgsType()
export class CreateClientArgs {
  @TypeGraphQL.Field(_type => ClientCreateInput, {
    nullable: false
  })
  data!: ClientCreateInput;
}
