import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProblemUncheckedCreateInput } from "../../../inputs/ProblemUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProblemArgs {
  @TypeGraphQL.Field(_type => ProblemUncheckedCreateInput, {
    nullable: false
  })
  data!: ProblemUncheckedCreateInput;
}
