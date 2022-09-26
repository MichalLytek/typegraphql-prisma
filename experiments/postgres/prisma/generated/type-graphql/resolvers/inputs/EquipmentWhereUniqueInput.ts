import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EquipmentWhereUniqueInput", {
  isAbstract: true
})
export class EquipmentWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;
}
