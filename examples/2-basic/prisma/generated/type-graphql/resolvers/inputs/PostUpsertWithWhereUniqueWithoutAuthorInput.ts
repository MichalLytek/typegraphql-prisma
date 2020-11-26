import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostCreateWithoutAuthorInput } from "../inputs/PostCreateWithoutAuthorInput";
import { PostUpdateWithoutAuthorInput } from "../inputs/PostUpdateWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutAuthorInput, {
    nullable: false,
    description: undefined
  })
  update!: PostUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutAuthorInput, {
    nullable: false,
    description: undefined
  })
  create!: PostCreateWithoutAuthorInput;
}
