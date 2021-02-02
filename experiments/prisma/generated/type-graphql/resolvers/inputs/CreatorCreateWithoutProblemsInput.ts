import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemCreateNestedManyWithoutLikedByInput } from "../inputs/ProblemCreateNestedManyWithoutLikedByInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateWithoutProblemsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ProblemCreateNestedManyWithoutLikedByInput, {
    nullable: true
  })
  likes?: ProblemCreateNestedManyWithoutLikedByInput | undefined;
}
