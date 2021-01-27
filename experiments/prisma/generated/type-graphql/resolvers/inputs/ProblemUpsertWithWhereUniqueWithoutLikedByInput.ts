import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemUncheckedCreateWithoutLikedByInput } from "../inputs/ProblemUncheckedCreateWithoutLikedByInput";
import { ProblemUncheckedUpdateWithoutLikedByInput } from "../inputs/ProblemUncheckedUpdateWithoutLikedByInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpsertWithWhereUniqueWithoutLikedByInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemUncheckedUpdateWithoutLikedByInput, {
    nullable: false
  })
  update!: ProblemUncheckedUpdateWithoutLikedByInput;

  @TypeGraphQL.Field(_type => ProblemUncheckedCreateWithoutLikedByInput, {
    nullable: false
  })
  create!: ProblemUncheckedCreateWithoutLikedByInput;
}
