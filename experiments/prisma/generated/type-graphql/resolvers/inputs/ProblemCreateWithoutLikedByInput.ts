import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCreateNestedOneWithoutProblemsInput } from "../inputs/CreatorCreateNestedOneWithoutProblemsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateWithoutLikedByInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @TypeGraphQL.Field(_type => CreatorCreateNestedOneWithoutProblemsInput, {
    nullable: true
  })
  creator?: CreatorCreateNestedOneWithoutProblemsInput | undefined;
}
