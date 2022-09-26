import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentCreateInput } from "../../../inputs/EquipmentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEquipmentArgs {
  @TypeGraphQL.Field(_type => EquipmentCreateInput, {
    nullable: false
  })
  data!: EquipmentCreateInput;
}
