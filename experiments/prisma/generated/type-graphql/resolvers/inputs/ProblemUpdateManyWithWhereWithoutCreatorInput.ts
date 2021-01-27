import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput";
import { ProblemUncheckedUpdateManyWithoutProblemsInput } from "../inputs/ProblemUncheckedUpdateManyWithoutProblemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpdateManyWithWhereWithoutCreatorInput {
  @TypeGraphQL.Field(_type => ProblemScalarWhereInput, {
    nullable: false
  })
  where!: ProblemScalarWhereInput;

  @TypeGraphQL.Field(_type => ProblemUncheckedUpdateManyWithoutProblemsInput, {
    nullable: false
  })
  data!: ProblemUncheckedUpdateManyWithoutProblemsInput;
}
