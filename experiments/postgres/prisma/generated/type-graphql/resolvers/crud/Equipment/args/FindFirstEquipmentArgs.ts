import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentOrderByWithRelationInput } from "../../../inputs/EquipmentOrderByWithRelationInput";
import { EquipmentWhereInput } from "../../../inputs/EquipmentWhereInput";
import { EquipmentWhereUniqueInput } from "../../../inputs/EquipmentWhereUniqueInput";
import { EquipmentScalarFieldEnum } from "../../../../enums/EquipmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstEquipmentArgs {
  @TypeGraphQL.Field(_type => EquipmentWhereInput, {
    nullable: true
  })
  where?: EquipmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EquipmentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EquipmentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EquipmentWhereUniqueInput, {
    nullable: true
  })
  cursor?: EquipmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EquipmentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
