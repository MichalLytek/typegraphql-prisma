import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorUncheckedCreateWithoutProblemsInput } from "../inputs/CreatorUncheckedCreateWithoutProblemsInput";
import { CreatorUncheckedUpdateWithoutProblemsInput } from "../inputs/CreatorUncheckedUpdateWithoutProblemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpsertWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorUncheckedUpdateWithoutProblemsInput, {
    nullable: false
  })
  update!: CreatorUncheckedUpdateWithoutProblemsInput;

  @TypeGraphQL.Field(_type => CreatorUncheckedCreateWithoutProblemsInput, {
    nullable: false
  })
  create!: CreatorUncheckedCreateWithoutProblemsInput;
}
