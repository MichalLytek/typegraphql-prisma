import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyPostInputEnvelope } from "../inputs/CommentCreateManyPostInputEnvelope";
import { CommentCreateOrConnectWithoutPostInput } from "../inputs/CommentCreateOrConnectWithoutPostInput";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutPostInput")
export class CommentCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutPostInput], {
    nullable: true
  })
  create?: CommentCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
