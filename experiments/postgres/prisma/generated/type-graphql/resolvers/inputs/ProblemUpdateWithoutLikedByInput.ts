import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorUpdateOneWithoutProblemsNestedInput } from "../inputs/CreatorUpdateOneWithoutProblemsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProblemUpdateWithoutLikedByInput", {
  isAbstract: true
})
export class ProblemUpdateWithoutLikedByInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  problemText?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateOneWithoutProblemsNestedInput, {
    nullable: true
  })
  creator?: CreatorUpdateOneWithoutProblemsNestedInput | undefined;
}
