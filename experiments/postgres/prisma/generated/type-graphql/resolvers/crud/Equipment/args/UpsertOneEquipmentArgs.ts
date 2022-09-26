import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentCreateInput } from "../../../inputs/EquipmentCreateInput";
import { EquipmentUpdateInput } from "../../../inputs/EquipmentUpdateInput";
import { EquipmentWhereUniqueInput } from "../../../inputs/EquipmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEquipmentArgs {
  @TypeGraphQL.Field(_type => EquipmentWhereUniqueInput, {
    nullable: false
  })
  where!: EquipmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => EquipmentCreateInput, {
    nullable: false
  })
  create!: EquipmentCreateInput;

  @TypeGraphQL.Field(_type => EquipmentUpdateInput, {
    nullable: false
  })
  update!: EquipmentUpdateInput;
}
