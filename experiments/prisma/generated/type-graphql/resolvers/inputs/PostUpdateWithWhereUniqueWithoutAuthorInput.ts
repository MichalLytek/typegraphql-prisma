import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostUncheckedUpdateWithoutAuthorInput } from "../inputs/PostUncheckedUpdateWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUncheckedUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: PostUncheckedUpdateWithoutAuthorInput;
}
