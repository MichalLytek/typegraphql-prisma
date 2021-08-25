import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCreateWithoutPostsInput } from "../inputs/MainUserCreateWithoutPostsInput";
import { MainUserUpdateWithoutPostsInput } from "../inputs/MainUserUpdateWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MainUserUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => MainUserUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: MainUserUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => MainUserCreateWithoutPostsInput, {
    nullable: false
  })
  create!: MainUserCreateWithoutPostsInput;
}
