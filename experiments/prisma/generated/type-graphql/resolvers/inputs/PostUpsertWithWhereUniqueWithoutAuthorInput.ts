import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostUncheckedCreateWithoutAuthorInput } from "../inputs/PostUncheckedCreateWithoutAuthorInput";
import { PostUncheckedUpdateWithoutAuthorInput } from "../inputs/PostUncheckedUpdateWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUncheckedUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: PostUncheckedUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => PostUncheckedCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: PostUncheckedCreateWithoutAuthorInput;
}
