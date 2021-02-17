import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemCreateInput } from "../../../inputs/ProblemCreateInput";
import { ProblemUpdateInput } from "../../../inputs/ProblemUpdateInput";
import { ProblemWhereUniqueInput } from "../../../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProblemArgs {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemCreateInput, {
    nullable: false
  })
  create!: ProblemCreateInput;

  @TypeGraphQL.Field(_type => ProblemUpdateInput, {
    nullable: false
  })
  update!: ProblemUpdateInput;
}
