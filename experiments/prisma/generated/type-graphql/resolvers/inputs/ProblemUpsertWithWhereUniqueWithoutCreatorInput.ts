import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemUncheckedCreateWithoutCreatorInput } from "../inputs/ProblemUncheckedCreateWithoutCreatorInput";
import { ProblemUncheckedUpdateWithoutCreatorInput } from "../inputs/ProblemUncheckedUpdateWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpsertWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemUncheckedUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: ProblemUncheckedUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => ProblemUncheckedCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: ProblemUncheckedCreateWithoutCreatorInput;
}
