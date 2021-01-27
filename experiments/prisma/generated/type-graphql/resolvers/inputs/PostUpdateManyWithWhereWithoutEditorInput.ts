import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUncheckedUpdateManyWithoutEditorPostsInput } from "../inputs/PostUncheckedUpdateManyWithoutEditorPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithWhereWithoutEditorInput {
  @TypeGraphQL.Field(_type => PostScalarWhereInput, {
    nullable: false
  })
  where!: PostScalarWhereInput;

  @TypeGraphQL.Field(_type => PostUncheckedUpdateManyWithoutEditorPostsInput, {
    nullable: false
  })
  data!: PostUncheckedUpdateManyWithoutEditorPostsInput;
}
