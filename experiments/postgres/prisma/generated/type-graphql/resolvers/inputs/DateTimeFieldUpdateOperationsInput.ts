import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("DateTimeFieldUpdateOperationsInput")
export class DateTimeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  set?: Date | undefined;
}
