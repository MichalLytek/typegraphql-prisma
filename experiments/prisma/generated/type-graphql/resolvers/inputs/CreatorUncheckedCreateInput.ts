import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemUncheckedCreateManyWithoutCreatorInput } from "../inputs/ProblemUncheckedCreateManyWithoutCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUncheckedCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ProblemUncheckedCreateManyWithoutCreatorInput, {
    nullable: true
  })
  problems?: ProblemUncheckedCreateManyWithoutCreatorInput | undefined;
}
