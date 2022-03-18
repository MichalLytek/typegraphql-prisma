import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserUpdateInput } from "../../../inputs/MainUserUpdateInput";
import { MainUserWhereUniqueInput } from "../../../inputs/MainUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMainUserArgs {
  @TypeGraphQL.Field(_type => MainUserUpdateInput, {
    nullable: false
  })
  data!: MainUserUpdateInput;

  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: false
  })
  where!: MainUserWhereUniqueInput;
}
