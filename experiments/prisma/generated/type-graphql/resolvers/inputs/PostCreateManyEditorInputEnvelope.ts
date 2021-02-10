import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostCreateManyEditorInput } from "../inputs/PostCreateManyEditorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
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
