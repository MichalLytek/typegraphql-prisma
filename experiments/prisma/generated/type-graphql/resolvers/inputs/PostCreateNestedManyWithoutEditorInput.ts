import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostCreateManyEditorInputEnvelope } from "../inputs/PostCreateManyEditorInputEnvelope";
import { PostCreateOrConnectWithoutEditorInput } from "../inputs/PostCreateOrConnectWithoutEditorInput";
import { PostCreateWithoutEditorInput } from "../inputs/PostCreateWithoutEditorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedManyWithoutEditorInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutEditorInput], {
    nullable: true
  })
  create?: PostCreateWithoutEditorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutEditorInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutEditorInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyEditorInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyEditorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
