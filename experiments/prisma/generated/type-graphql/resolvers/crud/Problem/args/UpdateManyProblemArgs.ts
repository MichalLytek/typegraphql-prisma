import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProblemUncheckedUpdateManyInput } from "../../../inputs/ProblemUncheckedUpdateManyInput";
import { ProblemWhereInput } from "../../../inputs/ProblemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProblemArgs {
  @TypeGraphQL.Field(_type => ProblemUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: ProblemUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => ProblemWhereInput, {
    nullable: true
  })
  where?: ProblemWhereInput | undefined;
}
