import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateWithoutLikesInput } from "../inputs/CreatorCreateWithoutLikesInput";
import { CreatorUpdateWithoutLikesInput } from "../inputs/CreatorUpdateWithoutLikesInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpsertWithWhereUniqueWithoutLikesInput {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: CreatorUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => CreatorCreateWithoutLikesInput, {
    nullable: false
  })
  create!: CreatorCreateWithoutLikesInput;
}
