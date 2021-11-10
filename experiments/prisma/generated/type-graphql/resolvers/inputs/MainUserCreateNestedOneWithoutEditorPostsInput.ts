import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCreateOrConnectWithoutEditorPostsInput } from "../inputs/MainUserCreateOrConnectWithoutEditorPostsInput";
import { MainUserCreateWithoutEditorPostsInput } from "../inputs/MainUserCreateWithoutEditorPostsInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@TypeGraphQL.InputType("MainUserCreateNestedOneWithoutEditorPostsInput", {
  isAbstract: true
})
export class MainUserCreateNestedOneWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => MainUserCreateWithoutEditorPostsInput, {
    nullable: true
  })
  create?: MainUserCreateWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => MainUserCreateOrConnectWithoutEditorPostsInput, {
    nullable: true
  })
  connectOrCreate?: MainUserCreateOrConnectWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MainUserWhereUniqueInput | undefined;
}
