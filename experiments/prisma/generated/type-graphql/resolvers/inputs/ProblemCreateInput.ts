import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateNestedManyWithoutLikesInput } from "../inputs/CreatorCreateNestedManyWithoutLikesInput";
import { CreatorCreateNestedOneWithoutProblemsInput } from "../inputs/CreatorCreateNestedOneWithoutProblemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @TypeGraphQL.Field(_type => CreatorCreateNestedManyWithoutLikesInput, {
    nullable: true
  })
  likedBy?: CreatorCreateNestedManyWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => CreatorCreateNestedOneWithoutProblemsInput, {
    nullable: true
  })
  creator?: CreatorCreateNestedOneWithoutProblemsInput | undefined;
}
