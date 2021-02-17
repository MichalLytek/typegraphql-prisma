import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemWhereInput } from "../../../inputs/ProblemWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProblemArgs {
  @TypeGraphQL.Field(_type => ProblemWhereInput, {
    nullable: true
  })
  where?: ProblemWhereInput | undefined;
}
