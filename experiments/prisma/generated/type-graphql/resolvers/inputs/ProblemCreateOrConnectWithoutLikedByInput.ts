import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemCreateWithoutLikedByInput } from "../inputs/ProblemCreateWithoutLikedByInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateOrConnectWithoutLikedByInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemCreateWithoutLikedByInput, {
    nullable: false
  })
  create!: ProblemCreateWithoutLikedByInput;
}
