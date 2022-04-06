import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentCreateInput } from "../../../inputs/CommentCreateInput";
import { CommentUpdateInput } from "../../../inputs/CommentUpdateInput";
import { CommentWhereUniqueInput } from "../../../inputs/CommentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCommentArgs {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateInput, {
    nullable: false
  })
  create!: CommentCreateInput;

  @TypeGraphQL.Field(_type => CommentUpdateInput, {
    nullable: false
  })
  update!: CommentUpdateInput;
}
