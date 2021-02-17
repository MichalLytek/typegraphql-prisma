import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateOrConnectWithoutLikesInput } from "../inputs/CreatorCreateOrConnectWithoutLikesInput";
import { CreatorCreateWithoutLikesInput } from "../inputs/CreatorCreateWithoutLikesInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateNestedManyWithoutLikesInput {
  @TypeGraphQL.Field(_type => [CreatorCreateWithoutLikesInput], {
    nullable: true
  })
  create?: CreatorCreateWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorCreateOrConnectWithoutLikesInput], {
    nullable: true
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  connect?: CreatorWhereUniqueInput[] | undefined;
}
