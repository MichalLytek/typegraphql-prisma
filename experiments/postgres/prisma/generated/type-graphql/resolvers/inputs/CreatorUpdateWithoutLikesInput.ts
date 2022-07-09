import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemUpdateManyWithoutCreatorNestedInput } from "../inputs/ProblemUpdateManyWithoutCreatorNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CreatorUpdateWithoutLikesInput", {
  isAbstract: true
})
export class CreatorUpdateWithoutLikesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProblemUpdateManyWithoutCreatorNestedInput, {
    nullable: true
  })
  problems?: ProblemUpdateManyWithoutCreatorNestedInput | undefined;
}
