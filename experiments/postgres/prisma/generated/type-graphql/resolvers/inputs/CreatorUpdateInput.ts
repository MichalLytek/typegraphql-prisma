import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemUpdateManyWithoutCreatorNestedInput } from "../inputs/ProblemUpdateManyWithoutCreatorNestedInput";
import { ProblemUpdateManyWithoutLikedByNestedInput } from "../inputs/ProblemUpdateManyWithoutLikedByNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CreatorUpdateInput", {
  isAbstract: true
})
export class CreatorUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProblemUpdateManyWithoutLikedByNestedInput, {
    nullable: true
  })
  likes?: ProblemUpdateManyWithoutLikedByNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProblemUpdateManyWithoutCreatorNestedInput, {
    nullable: true
  })
  problems?: ProblemUpdateManyWithoutCreatorNestedInput | undefined;
}
