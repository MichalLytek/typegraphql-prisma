import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostCreateOrConnectWithoutauthorInput } from "../inputs/PostCreateOrConnectWithoutauthorInput";
import { PostCreateWithoutAuthorInput } from "../inputs/PostCreateWithoutAuthorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUncheckedCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: PostCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutauthorInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutauthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
