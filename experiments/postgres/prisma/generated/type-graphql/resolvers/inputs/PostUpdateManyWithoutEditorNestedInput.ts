import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyEditorInputEnvelope } from "../inputs/PostCreateManyEditorInputEnvelope";
import { PostCreateOrConnectWithoutEditorInput } from "../inputs/PostCreateOrConnectWithoutEditorInput";
import { PostCreateWithoutEditorInput } from "../inputs/PostCreateWithoutEditorInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutEditorInput } from "../inputs/PostUpdateManyWithWhereWithoutEditorInput";
import { PostUpdateWithWhereUniqueWithoutEditorInput } from "../inputs/PostUpdateWithWhereUniqueWithoutEditorInput";
import { PostUpsertWithWhereUniqueWithoutEditorInput } from "../inputs/PostUpsertWithWhereUniqueWithoutEditorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutEditorNestedInput")
export class PostUpdateManyWithoutEditorNestedInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutEditorInput], {
    nullable: true
  })
  create?: PostCreateWithoutEditorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutEditorInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutEditorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutEditorInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutEditorInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyEditorInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyEditorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutEditorInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutEditorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutEditorInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutEditorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
