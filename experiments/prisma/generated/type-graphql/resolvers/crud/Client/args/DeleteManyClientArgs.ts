import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyClientArgs {
  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  where?: ClientWhereInput | undefined;
}
