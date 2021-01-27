import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProblemUncheckedUpdateInput } from "../../../inputs/ProblemUncheckedUpdateInput";
import { ProblemWhereUniqueInput } from "../../../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProblemArgs {
  @TypeGraphQL.Field(_type => ProblemUncheckedUpdateInput, {
    nullable: false
  })
  data!: ProblemUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;
}
