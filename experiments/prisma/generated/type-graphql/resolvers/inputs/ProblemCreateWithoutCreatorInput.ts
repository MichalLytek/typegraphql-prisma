import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateManyWithoutLikesInput } from "../inputs/CreatorCreateManyWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateWithoutCreatorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @TypeGraphQL.Field(_type => CreatorCreateManyWithoutLikesInput, {
    nullable: true
  })
  likedBy?: CreatorCreateManyWithoutLikesInput | undefined;
}
