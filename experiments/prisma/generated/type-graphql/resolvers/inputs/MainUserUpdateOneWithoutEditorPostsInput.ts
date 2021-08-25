import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCreateOrConnectWithoutEditorPostsInput } from "../inputs/MainUserCreateOrConnectWithoutEditorPostsInput";
import { MainUserCreateWithoutEditorPostsInput } from "../inputs/MainUserCreateWithoutEditorPostsInput";
import { MainUserUpdateWithoutEditorPostsInput } from "../inputs/MainUserUpdateWithoutEditorPostsInput";
import { MainUserUpsertWithoutEditorPostsInput } from "../inputs/MainUserUpsertWithoutEditorPostsInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MainUserUpdateOneWithoutEditorPostsInput {
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

  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MainUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MainUserUpdateWithoutEditorPostsInput, {
    nullable: true
  })
  update?: MainUserUpdateWithoutEditorPostsInput | undefined;
}
