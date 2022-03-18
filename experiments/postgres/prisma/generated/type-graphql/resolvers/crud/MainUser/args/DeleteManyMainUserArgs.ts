import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserWhereInput } from "../../../inputs/MainUserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMainUserArgs {
  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;
}
