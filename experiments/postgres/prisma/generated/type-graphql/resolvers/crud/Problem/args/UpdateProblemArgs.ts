import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemUpdateInput } from "../../../inputs/ProblemUpdateInput";
import { ProblemWhereUniqueInput } from "../../../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProblemArgs {
  @TypeGraphQL.Field(_type => ProblemUpdateInput, {
    nullable: false
  })
  data!: ProblemUpdateInput;

  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;
}
