import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostUncheckedUpdateWithoutEditorInput } from "../inputs/PostUncheckedUpdateWithoutEditorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateWithWhereUniqueWithoutEditorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUncheckedUpdateWithoutEditorInput, {
    nullable: false
  })
  data!: PostUncheckedUpdateWithoutEditorInput;
}
