import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserCreateManyInput } from "../../../inputs/UserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserArgs {
  @TypeGraphQL.Field(_type => [UserCreateManyInput], {
    nullable: false
  })
  data!: UserCreateManyInput[];
}
