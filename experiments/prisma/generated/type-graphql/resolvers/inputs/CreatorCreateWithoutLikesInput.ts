import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemCreateManyWithoutCreatorInput } from "../inputs/ProblemCreateManyWithoutCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateWithoutLikesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ProblemCreateManyWithoutCreatorInput, {
    nullable: true
  })
  problems?: ProblemCreateManyWithoutCreatorInput | undefined;
}
