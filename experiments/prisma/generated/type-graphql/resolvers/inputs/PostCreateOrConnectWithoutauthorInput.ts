import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostUncheckedCreateWithoutAuthorInput } from "../inputs/PostUncheckedCreateWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateOrConnectWithoutauthorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUncheckedCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: PostUncheckedCreateWithoutAuthorInput;
}
