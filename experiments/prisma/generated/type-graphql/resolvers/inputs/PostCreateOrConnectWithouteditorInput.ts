import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostUncheckedCreateWithoutEditorInput } from "../inputs/PostUncheckedCreateWithoutEditorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateOrConnectWithouteditorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUncheckedCreateWithoutEditorInput, {
    nullable: false
  })
  create!: PostUncheckedCreateWithoutEditorInput;
}
