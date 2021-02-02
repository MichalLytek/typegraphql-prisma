import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateNestedManyWithoutLikesInput } from "../inputs/CreatorCreateNestedManyWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateWithoutCreatorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @TypeGraphQL.Field(_type => CreatorCreateNestedManyWithoutLikesInput, {
    nullable: true
  })
  likedBy?: CreatorCreateNestedManyWithoutLikesInput | undefined;
}
