import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientUncheckedUpdateManyInput } from "../../../inputs/ClientUncheckedUpdateManyInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyClientArgs {
  @TypeGraphQL.Field(_type => ClientUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: ClientUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  where?: ClientWhereInput | undefined;
}
