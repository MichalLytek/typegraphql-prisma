import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput";
import { ProblemUpdateManyMutationInput } from "../inputs/ProblemUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpdateManyWithWhereWithoutCreatorInput {
  @TypeGraphQL.Field(_type => ProblemScalarWhereInput, {
    nullable: false
  })
  where!: ProblemScalarWhereInput;

  @TypeGraphQL.Field(_type => ProblemUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProblemUpdateManyMutationInput;
}
