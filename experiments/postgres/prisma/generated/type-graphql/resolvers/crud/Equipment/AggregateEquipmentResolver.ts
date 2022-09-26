import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEquipmentArgs } from "./args/AggregateEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { AggregateEquipment } from "../../outputs/AggregateEquipment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Equipment)
export class AggregateEquipmentResolver {
  @TypeGraphQL.Query(_returns => AggregateEquipment, {
    nullable: false
  })
  async aggregateEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEquipmentArgs): Promise<AggregateEquipment> {
    return getPrismaFromContext(ctx).equipment.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
