import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentUpdateInput } from "../../../inputs/EquipmentUpdateInput";
import { EquipmentWhereUniqueInput } from "../../../inputs/EquipmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEquipmentArgs {
  @TypeGraphQL.Field(_type => EquipmentUpdateInput, {
    nullable: false
  })
  data!: EquipmentUpdateInput;

  @TypeGraphQL.Field(_type => EquipmentWhereUniqueInput, {
    nullable: false
  })
  where!: EquipmentWhereUniqueInput;
}
