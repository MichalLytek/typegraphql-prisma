import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput";
import { ProblemUpdateManyMutationInput } from "../inputs/ProblemUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProblemUpdateManyWithWhereWithoutCreatorInput {
  @TypeGraphQL.Field(_type => ProblemScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: ProblemScalarWhereInput;

  @TypeGraphQL.Field(_type => ProblemUpdateManyMutationInput, {
    nullable: false,
    description: undefined
  })
  data!: ProblemUpdateManyMutationInput;
}
