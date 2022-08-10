import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyPostInputEnvelope } from "../inputs/CommentCreateManyPostInputEnvelope";
import { CommentCreateOrConnectWithoutPostInput } from "../inputs/CommentCreateOrConnectWithoutPostInput";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutPostInput } from "../inputs/CommentUpdateManyWithWhereWithoutPostInput";
import { CommentUpdateWithWhereUniqueWithoutPostInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutPostInput";
import { CommentUpsertWithWhereUniqueWithoutPostInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutPostNestedInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutPostInput], {
    nullable: true
  })
  create?: CommentCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
