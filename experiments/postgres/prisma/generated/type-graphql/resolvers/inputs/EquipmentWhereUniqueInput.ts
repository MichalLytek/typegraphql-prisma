import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { EquipmentWhereInput } from "../inputs/EquipmentWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("EquipmentWhereUniqueInput", {
  isAbstract: true
})
export class EquipmentWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [EquipmentWhereInput], {
    nullable: true
  })
  AND?: EquipmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EquipmentWhereInput], {
    nullable: true
  })
  OR?: EquipmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EquipmentWhereInput], {
    nullable: true
  })
  NOT?: EquipmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;
}
