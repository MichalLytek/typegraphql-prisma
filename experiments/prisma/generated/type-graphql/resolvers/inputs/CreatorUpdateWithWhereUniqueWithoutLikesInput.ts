import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorUncheckedUpdateWithoutLikesInput } from "../inputs/CreatorUncheckedUpdateWithoutLikesInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpdateWithWhereUniqueWithoutLikesInput {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorUncheckedUpdateWithoutLikesInput, {
    nullable: false
  })
  data!: CreatorUncheckedUpdateWithoutLikesInput;
}
