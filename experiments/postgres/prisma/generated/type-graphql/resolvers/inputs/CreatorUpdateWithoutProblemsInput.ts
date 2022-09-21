import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemUpdateManyWithoutLikedByNestedInput } from "../inputs/ProblemUpdateManyWithoutLikedByNestedInput";

@TypeGraphQL.InputType("CreatorUpdateWithoutProblemsInput", {
  isAbstract: true
})
export class CreatorUpdateWithoutProblemsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => ProblemUpdateManyWithoutLikedByNestedInput, {
    nullable: true
  })
  likes?: ProblemUpdateManyWithoutLikedByNestedInput | undefined;
}
