import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ProblemUpdateWithoutCreatorInput } from "../inputs/ProblemUpdateWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProblemUpdateWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemUpdateWithoutCreatorInput, {
    nullable: false,
    description: undefined
  })
  data!: ProblemUpdateWithoutCreatorInput;
}
