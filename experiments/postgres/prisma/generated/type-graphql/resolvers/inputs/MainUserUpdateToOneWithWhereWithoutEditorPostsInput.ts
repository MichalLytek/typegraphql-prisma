import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserUpdateWithoutEditorPostsInput } from "../inputs/MainUserUpdateWithoutEditorPostsInput";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";

@TypeGraphQL.InputType("MainUserUpdateToOneWithWhereWithoutEditorPostsInput")
export class MainUserUpdateToOneWithWhereWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MainUserUpdateWithoutEditorPostsInput, {
    nullable: false
  })
  data!: MainUserUpdateWithoutEditorPostsInput;
}
