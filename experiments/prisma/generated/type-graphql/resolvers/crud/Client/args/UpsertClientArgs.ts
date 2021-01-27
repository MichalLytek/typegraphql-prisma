import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientUncheckedCreateInput } from "../../../inputs/ClientUncheckedCreateInput";
import { ClientUncheckedUpdateInput } from "../../../inputs/ClientUncheckedUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertClientArgs {
  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClientUncheckedCreateInput, {
    nullable: false
  })
  create!: ClientUncheckedCreateInput;

  @TypeGraphQL.Field(_type => ClientUncheckedUpdateInput, {
    nullable: false
  })
  update!: ClientUncheckedUpdateInput;
}
