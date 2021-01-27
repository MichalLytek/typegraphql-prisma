import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput";
import { ProblemUncheckedUpdateManyWithoutLikesInput } from "../inputs/ProblemUncheckedUpdateManyWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpdateManyWithWhereWithoutLikedByInput {
  @TypeGraphQL.Field(_type => ProblemScalarWhereInput, {
    nullable: false
  })
  where!: ProblemScalarWhereInput;

  @TypeGraphQL.Field(_type => ProblemUncheckedUpdateManyWithoutLikesInput, {
    nullable: false
  })
  data!: ProblemUncheckedUpdateManyWithoutLikesInput;
}
