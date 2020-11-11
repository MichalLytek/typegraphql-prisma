import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ProblemUpdateWithoutLikedByInput } from "../inputs/ProblemUpdateWithoutLikedByInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProblemUpdateWithWhereUniqueWithoutLikedByInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemUpdateWithoutLikedByInput, {
    nullable: false,
    description: undefined
  })
  data!: ProblemUpdateWithoutLikedByInput;
}
