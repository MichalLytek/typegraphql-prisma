import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorUpdateOneRequiredWithoutMoviesNestedInput } from "../inputs/DirectorUpdateOneRequiredWithoutMoviesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieUpdateInput", {
  isAbstract: true
})
export class MovieUpdateInput {
  @TypeGraphQL.Field(_type => DirectorUpdateOneRequiredWithoutMoviesNestedInput, {
    nullable: true
  })
  director?: DirectorUpdateOneRequiredWithoutMoviesNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;
}
