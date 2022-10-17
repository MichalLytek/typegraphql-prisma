import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateOneRequiredWithoutCommentsNestedInput } from "../inputs/PostUpdateOneRequiredWithoutCommentsNestedInput";

@TypeGraphQL.InputType("CommentUpdateInput", {
  isAbstract: true
})
export class CommentUpdateInput {
  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true
  })
  post?: PostUpdateOneRequiredWithoutCommentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | undefined;
}
