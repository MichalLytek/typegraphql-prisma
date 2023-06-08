import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorUpdateOneWithoutProblemsNestedInput } from "../inputs/CreatorUpdateOneWithoutProblemsNestedInput";

@TypeGraphQL.InputType("ProblemUpdateWithoutLikedByInput")
export class ProblemUpdateWithoutLikedByInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  problemText?: string | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateOneWithoutProblemsNestedInput, {
    nullable: true
  })
  creator?: CreatorUpdateOneWithoutProblemsNestedInput | undefined;
}
