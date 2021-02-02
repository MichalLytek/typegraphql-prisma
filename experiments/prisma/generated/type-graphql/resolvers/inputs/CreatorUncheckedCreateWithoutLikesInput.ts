import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemUncheckedCreateNestedManyWithoutCreatorInput } from "../inputs/ProblemUncheckedCreateNestedManyWithoutCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUncheckedCreateWithoutLikesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ProblemUncheckedCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  problems?: ProblemUncheckedCreateNestedManyWithoutCreatorInput | undefined;
}
