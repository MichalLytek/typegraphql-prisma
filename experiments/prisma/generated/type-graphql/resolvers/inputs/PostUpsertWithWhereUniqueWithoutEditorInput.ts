import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostUncheckedCreateWithoutEditorInput } from "../inputs/PostUncheckedCreateWithoutEditorInput";
import { PostUncheckedUpdateWithoutEditorInput } from "../inputs/PostUncheckedUpdateWithoutEditorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutEditorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUncheckedUpdateWithoutEditorInput, {
    nullable: false
  })
  update!: PostUncheckedUpdateWithoutEditorInput;

  @TypeGraphQL.Field(_type => PostUncheckedCreateWithoutEditorInput, {
    nullable: false
  })
  create!: PostUncheckedCreateWithoutEditorInput;
}
