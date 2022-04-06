import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyPostInput } from "../inputs/CommentCreateManyPostInput";

@TypeGraphQL.InputType("CommentCreateManyPostInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyPostInput], {
    nullable: false
  })
  data!: CommentCreateManyPostInput[];
}
