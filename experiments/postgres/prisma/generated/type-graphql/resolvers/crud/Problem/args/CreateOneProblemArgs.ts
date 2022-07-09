import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemCreateInput } from "../../../inputs/ProblemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProblemArgs {
  @TypeGraphQL.Field(_type => ProblemCreateInput, {
    nullable: false
  })
  data!: ProblemCreateInput;
}
