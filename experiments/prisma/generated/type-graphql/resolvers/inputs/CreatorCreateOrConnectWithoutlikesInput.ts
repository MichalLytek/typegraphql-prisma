import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorUncheckedCreateWithoutLikesInput } from "../inputs/CreatorUncheckedCreateWithoutLikesInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateOrConnectWithoutlikesInput {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorUncheckedCreateWithoutLikesInput, {
    nullable: false
  })
  create!: CreatorUncheckedCreateWithoutLikesInput;
}
