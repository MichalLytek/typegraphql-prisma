import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { EquipmentCountAggregate } from "../outputs/EquipmentCountAggregate";
import { EquipmentMaxAggregate } from "../outputs/EquipmentMaxAggregate";
import { EquipmentMinAggregate } from "../outputs/EquipmentMinAggregate";

@TypeGraphQL.ObjectType("AggregateEquipment", {})
export class AggregateEquipment {
  @TypeGraphQL.Field(_type => EquipmentCountAggregate, {
    nullable: true
  })
  _count!: EquipmentCountAggregate | null;

  @TypeGraphQL.Field(_type => EquipmentMinAggregate, {
    nullable: true
  })
  _min!: EquipmentMinAggregate | null;

  @TypeGraphQL.Field(_type => EquipmentMaxAggregate, {
    nullable: true
  })
  _max!: EquipmentMaxAggregate | null;
}
