import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieUncheckedUpdateManyWithoutDirectorInput } from "../inputs/MovieUncheckedUpdateManyWithoutDirectorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorUncheckedUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUncheckedUpdateManyWithoutDirectorInput, {
    nullable: true
  })
  movies?: MovieUncheckedUpdateManyWithoutDirectorInput | undefined;
}
