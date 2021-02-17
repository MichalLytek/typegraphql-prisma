import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorUpdateManyWithoutLikesInput } from "../inputs/CreatorUpdateManyWithoutLikesInput";
import { CreatorUpdateOneWithoutProblemsInput } from "../inputs/CreatorUpdateOneWithoutProblemsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  problemText?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateManyWithoutLikesInput, {
    nullable: true
  })
  likedBy?: CreatorUpdateManyWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateOneWithoutProblemsInput, {
    nullable: true
  })
  creator?: CreatorUpdateOneWithoutProblemsInput | undefined;
}
