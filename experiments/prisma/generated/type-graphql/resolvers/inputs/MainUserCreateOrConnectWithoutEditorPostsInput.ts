import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCreateWithoutEditorPostsInput } from "../inputs/MainUserCreateWithoutEditorPostsInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MainUserCreateOrConnectWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: false
  })
  where!: MainUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MainUserCreateWithoutEditorPostsInput, {
    nullable: false
  })
  create!: MainUserCreateWithoutEditorPostsInput;
}
