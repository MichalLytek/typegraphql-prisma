import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput";
import { CreatorUpdateWithoutProblemsInput } from "../inputs/CreatorUpdateWithoutProblemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpsertWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorUpdateWithoutProblemsInput, {
    nullable: false
  })
  update!: CreatorUpdateWithoutProblemsInput;

  @TypeGraphQL.Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: false
  })
  create!: CreatorCreateWithoutProblemsInput;
}
