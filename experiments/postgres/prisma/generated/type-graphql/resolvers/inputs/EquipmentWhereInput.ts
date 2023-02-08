import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("EquipmentWhereInput", {
  isAbstract: true
})
export class EquipmentWhereInput {
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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;
}
