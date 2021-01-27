import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientUncheckedUpdateInput } from "../../../inputs/ClientUncheckedUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateClientArgs {
  @TypeGraphQL.Field(_type => ClientUncheckedUpdateInput, {
    nullable: false
  })
  data!: ClientUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;
}
