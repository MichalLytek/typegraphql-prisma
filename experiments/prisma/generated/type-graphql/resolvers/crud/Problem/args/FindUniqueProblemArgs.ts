import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProblemWhereUniqueInput } from "../../../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProblemArgs {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, { nullable: false })
  where!: ProblemWhereUniqueInput;
}
