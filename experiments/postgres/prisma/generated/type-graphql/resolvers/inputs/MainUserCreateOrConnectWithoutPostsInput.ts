import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCreateWithoutPostsInput } from "../inputs/MainUserCreateWithoutPostsInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@TypeGraphQL.InputType("MainUserCreateOrConnectWithoutPostsInput")
export class MainUserCreateOrConnectWithoutPostsInput {
  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: false
  })
  where!: MainUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MainUserCreateWithoutPostsInput, {
    nullable: false
  })
  create!: MainUserCreateWithoutPostsInput;
}
