import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentUpdateManyMutationInput } from "../../../inputs/EquipmentUpdateManyMutationInput";
import { EquipmentWhereInput } from "../../../inputs/EquipmentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEquipmentArgs {
  @TypeGraphQL.Field(_type => EquipmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: EquipmentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EquipmentWhereInput, {
    nullable: true
  })
  where?: EquipmentWhereInput | undefined;
}
