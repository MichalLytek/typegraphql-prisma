import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemUpdateWithoutCreatorInput } from "../inputs/ProblemUpdateWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType("ProblemUpdateWithWhereUniqueWithoutCreatorInput", {
  isAbstract: true
})
export class ProblemUpdateWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProblemUpdateWithoutCreatorInput, {
    nullable: false
  })
  data!: ProblemUpdateWithoutCreatorInput;
}
