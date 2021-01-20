import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateManyWithoutLikesInput } from "../inputs/CreatorCreateManyWithoutLikesInput";
import { CreatorCreateOneWithoutProblemsInput } from "../inputs/CreatorCreateOneWithoutProblemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @TypeGraphQL.Field(_type => CreatorCreateManyWithoutLikesInput, {
    nullable: true
  })
  likedBy?: CreatorCreateManyWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => CreatorCreateOneWithoutProblemsInput, {
    nullable: true
  })
  creator?: CreatorCreateOneWithoutProblemsInput | undefined;
}
