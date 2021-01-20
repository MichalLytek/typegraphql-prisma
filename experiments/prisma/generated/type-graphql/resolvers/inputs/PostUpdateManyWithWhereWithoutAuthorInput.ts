import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyMutationInput } from "../inputs/PostUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PostScalarWhereInput, {
    nullable: false
  })
  where!: PostScalarWhereInput;

  @TypeGraphQL.Field(_type => PostUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostUpdateManyMutationInput;
}
