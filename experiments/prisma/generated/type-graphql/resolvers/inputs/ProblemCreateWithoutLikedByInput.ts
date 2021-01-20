import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateOneWithoutProblemsInput } from "../inputs/CreatorCreateOneWithoutProblemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateWithoutLikedByInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @TypeGraphQL.Field(_type => CreatorCreateOneWithoutProblemsInput, {
    nullable: true
  })
  creator?: CreatorCreateOneWithoutProblemsInput | undefined;
}
