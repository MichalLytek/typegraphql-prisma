import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorUpdateOneWithoutProblemsInput } from "../inputs/CreatorUpdateOneWithoutProblemsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpdateWithoutLikedByInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  problemText?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateOneWithoutProblemsInput, {
    nullable: true
  })
  creator?: CreatorUpdateOneWithoutProblemsInput | undefined;
}
