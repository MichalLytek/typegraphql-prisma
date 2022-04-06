import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentUpdateInput } from "../../../inputs/CommentUpdateInput";
import { CommentWhereUniqueInput } from "../../../inputs/CommentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCommentArgs {
  @TypeGraphQL.Field(_type => CommentUpdateInput, {
    nullable: false
  })
  data!: CommentUpdateInput;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;
}
