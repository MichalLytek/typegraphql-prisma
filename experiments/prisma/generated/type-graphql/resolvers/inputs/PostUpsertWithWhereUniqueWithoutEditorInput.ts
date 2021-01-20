import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostCreateWithoutEditorInput } from "../inputs/PostCreateWithoutEditorInput";
import { PostUpdateWithoutEditorInput } from "../inputs/PostUpdateWithoutEditorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutEditorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutEditorInput, {
    nullable: false
  })
  update!: PostUpdateWithoutEditorInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutEditorInput, {
    nullable: false
  })
  create!: PostCreateWithoutEditorInput;
}
