import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorUpdateManyWithoutLikesNestedInput } from "../inputs/CreatorUpdateManyWithoutLikesNestedInput";
import { CreatorUpdateOneWithoutProblemsNestedInput } from "../inputs/CreatorUpdateOneWithoutProblemsNestedInput";

@TypeGraphQL.InputType("ProblemUpdateInput")
export class ProblemUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  problemText?: string | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateManyWithoutLikesNestedInput, {
    nullable: true
  })
  likedBy?: CreatorUpdateManyWithoutLikesNestedInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateOneWithoutProblemsNestedInput, {
    nullable: true
  })
  creator?: CreatorUpdateOneWithoutProblemsNestedInput | undefined;
}
