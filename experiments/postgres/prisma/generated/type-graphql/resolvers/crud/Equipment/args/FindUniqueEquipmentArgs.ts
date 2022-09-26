import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentWhereUniqueInput } from "../../../inputs/EquipmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEquipmentArgs {
  @TypeGraphQL.Field(_type => EquipmentWhereUniqueInput, {
    nullable: false
  })
  where!: EquipmentWhereUniqueInput;
}
