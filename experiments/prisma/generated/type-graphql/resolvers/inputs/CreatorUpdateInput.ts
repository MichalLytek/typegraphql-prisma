import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemUpdateManyWithoutCreatorInput } from "../inputs/ProblemUpdateManyWithoutCreatorInput";
import { ProblemUpdateManyWithoutLikedByInput } from "../inputs/ProblemUpdateManyWithoutLikedByInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProblemUpdateManyWithoutLikedByInput, {
    nullable: true
  })
  likes?: ProblemUpdateManyWithoutLikedByInput | undefined;

  @TypeGraphQL.Field(_type => ProblemUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  problems?: ProblemUpdateManyWithoutCreatorInput | undefined;
}
