import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserCreateInput } from "../../../inputs/MainUserCreateInput";
import { MainUserUpdateInput } from "../../../inputs/MainUserUpdateInput";
import { MainUserWhereUniqueInput } from "../../../inputs/MainUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMainUserArgs {
  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: false
  })
  where!: MainUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MainUserCreateInput, {
    nullable: false
  })
  create!: MainUserCreateInput;

  @TypeGraphQL.Field(_type => MainUserUpdateInput, {
    nullable: false
  })
  update!: MainUserUpdateInput;
}
