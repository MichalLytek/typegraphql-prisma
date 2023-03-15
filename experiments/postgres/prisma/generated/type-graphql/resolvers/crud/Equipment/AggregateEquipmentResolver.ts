import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEquipmentArgs } from "./args/AggregateEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { AggregateEquipment } from "../../outputs/AggregateEquipment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Equipment)
export class AggregateEquipmentResolver {
  @TypeGraphQL.Query(_returns => AggregateEquipment, {
    nullable: false
  })
  async aggregateEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateEquipmentArgs) args: AggregateEquipmentArgs): Promise<AggregateEquipment> {
    return getPrismaFromContext(ctx).equipment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
