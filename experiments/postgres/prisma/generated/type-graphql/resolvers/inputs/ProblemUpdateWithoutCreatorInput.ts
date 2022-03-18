import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorUpdateManyWithoutLikesInput } from "../inputs/CreatorUpdateManyWithoutLikesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProblemUpdateWithoutCreatorInput", {
  isAbstract: true
})
export class ProblemUpdateWithoutCreatorInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  problemText?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateManyWithoutLikesInput, {
    nullable: true
  })
  likedBy?: CreatorUpdateManyWithoutLikesInput | undefined;
}
