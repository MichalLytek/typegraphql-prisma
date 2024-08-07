import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentCreateManyInput } from "../../../inputs/EquipmentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnEquipmentArgs {
  @TypeGraphQL.Field(_type => [EquipmentCreateManyInput], {
    nullable: false
  })
  data!: EquipmentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
