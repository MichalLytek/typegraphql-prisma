import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput";
import { ProblemUpdateManyMutationInput } from "../inputs/ProblemUpdateManyMutationInput";

@TypeGraphQL.InputType("ProblemUpdateManyWithWhereWithoutCreatorInput", {
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
