import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("EnumRoleFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumRoleFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  set?: "USER" | "ADMIN" | undefined;
}
