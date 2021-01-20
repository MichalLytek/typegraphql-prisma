import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemCreateManyWithoutLikedByInput } from "../inputs/ProblemCreateManyWithoutLikedByInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateWithoutProblemsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ProblemCreateManyWithoutLikedByInput, {
    nullable: true
  })
  likes?: ProblemCreateManyWithoutLikedByInput | undefined;
}
