import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CommentUpdateWithoutPostInput", {
  isAbstract: true
})
export class CommentUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | undefined;
}
