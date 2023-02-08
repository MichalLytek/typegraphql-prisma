import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenWhereInput } from "../../../inputs/HiddenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyHiddenArgs {
  @TypeGraphQL.Field(_type => HiddenWhereInput, {
    nullable: true
  })
  where?: HiddenWhereInput | undefined;
}
