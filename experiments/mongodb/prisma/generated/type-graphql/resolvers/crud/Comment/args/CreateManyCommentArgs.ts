import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentCreateManyInput } from "../../../inputs/CommentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCommentArgs {
  @TypeGraphQL.Field(_type => [CommentCreateManyInput], {
    nullable: false
  })
  data!: CommentCreateManyInput[];
}
