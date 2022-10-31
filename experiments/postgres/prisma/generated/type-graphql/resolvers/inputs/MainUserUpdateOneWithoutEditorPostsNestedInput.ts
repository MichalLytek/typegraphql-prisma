import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCreateOrConnectWithoutEditorPostsInput } from "../inputs/MainUserCreateOrConnectWithoutEditorPostsInput";
import { MainUserCreateWithoutEditorPostsInput } from "../inputs/MainUserCreateWithoutEditorPostsInput";
import { MainUserUpdateToOneWithWhereWithoutEditorPostsInput } from "../inputs/MainUserUpdateToOneWithWhereWithoutEditorPostsInput";
import { MainUserUpsertWithoutEditorPostsInput } from "../inputs/MainUserUpsertWithoutEditorPostsInput";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@TypeGraphQL.InputType("MainUserUpdateOneWithoutEditorPostsNestedInput", {
  isAbstract: true
})
export class MainUserUpdateOneWithoutEditorPostsNestedInput {
  @TypeGraphQL.Field(_type => MainUserCreateWithoutEditorPostsInput, {
    nullable: true
  })
  create?: MainUserCreateWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => MainUserCreateOrConnectWithoutEditorPostsInput, {
    nullable: true
  })
  connectOrCreate?: MainUserCreateOrConnectWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => MainUserUpsertWithoutEditorPostsInput, {
    nullable: true
  })
  upsert?: MainUserUpsertWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  disconnect?: MainUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  delete?: MainUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MainUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MainUserUpdateToOneWithWhereWithoutEditorPostsInput, {
    nullable: true
  })
  update?: MainUserUpdateToOneWithWhereWithoutEditorPostsInput | undefined;
}
