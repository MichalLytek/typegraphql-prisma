import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ProblemCreateWithoutCreatorInput } from "../inputs/ProblemCreateWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProblemCreateOrConnectWithoutcreatorInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemCreateWithoutCreatorInput, {
    nullable: false,
    description: undefined
  })
  create!: ProblemCreateWithoutCreatorInput;
}
