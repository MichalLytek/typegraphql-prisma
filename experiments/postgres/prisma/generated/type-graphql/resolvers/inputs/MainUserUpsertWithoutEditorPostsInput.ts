import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCreateWithoutEditorPostsInput } from "../inputs/MainUserCreateWithoutEditorPostsInput";
import { MainUserUpdateWithoutEditorPostsInput } from "../inputs/MainUserUpdateWithoutEditorPostsInput";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";

@TypeGraphQL.InputType("MainUserUpsertWithoutEditorPostsInput", {})
export class MainUserUpsertWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => MainUserUpdateWithoutEditorPostsInput, {
    nullable: false
  })
  update!: MainUserUpdateWithoutEditorPostsInput;

  @TypeGraphQL.Field(_type => MainUserCreateWithoutEditorPostsInput, {
    nullable: false
  })
  create!: MainUserCreateWithoutEditorPostsInput;

  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;
}
