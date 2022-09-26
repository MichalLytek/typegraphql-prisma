import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentWhereInput } from "../../../inputs/EquipmentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEquipmentArgs {
  @TypeGraphQL.Field(_type => EquipmentWhereInput, {
    nullable: true
  })
  where?: EquipmentWhereInput | undefined;
}
