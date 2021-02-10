import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostCreateManyAuthorInput } from "../inputs/PostCreateManyAuthorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyAuthorInput], {
    nullable: false
  })
  data!: PostCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
