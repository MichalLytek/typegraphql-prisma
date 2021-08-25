import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserUpdateManyMutationInput } from "../../../inputs/MainUserUpdateManyMutationInput";
import { MainUserWhereInput } from "../../../inputs/MainUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMainUserArgs {
  @TypeGraphQL.Field(_type => MainUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: MainUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;
}
