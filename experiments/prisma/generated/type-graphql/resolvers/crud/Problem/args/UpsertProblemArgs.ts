import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProblemUncheckedCreateInput } from "../../../inputs/ProblemUncheckedCreateInput";
import { ProblemUncheckedUpdateInput } from "../../../inputs/ProblemUncheckedUpdateInput";
import { ProblemWhereUniqueInput } from "../../../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProblemArgs {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemUncheckedCreateInput, {
    nullable: false
  })
  create!: ProblemUncheckedCreateInput;

  @TypeGraphQL.Field(_type => ProblemUncheckedUpdateInput, {
    nullable: false
  })
  update!: ProblemUncheckedUpdateInput;
}
