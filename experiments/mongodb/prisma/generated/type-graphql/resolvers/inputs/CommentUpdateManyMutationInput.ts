import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CommentUpdateManyMutationInput", {
  isAbstract: true
})
export class CommentUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | undefined;
}
