import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemCreateWithoutCreatorInput } from "../inputs/ProblemCreateWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateOrConnectWithoutCreatorInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: ProblemCreateWithoutCreatorInput;
}
