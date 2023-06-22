import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyEditorInput } from "../inputs/PostCreateManyEditorInput";

@TypeGraphQL.InputType("PostCreateManyEditorInputEnvelope", {})
export class PostCreateManyEditorInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyEditorInput], {
    nullable: false
  })
  data!: PostCreateManyEditorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
