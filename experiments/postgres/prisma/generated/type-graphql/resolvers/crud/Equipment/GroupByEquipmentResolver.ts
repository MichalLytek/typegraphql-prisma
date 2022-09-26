import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByEquipmentArgs } from "./args/GroupByEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { EquipmentGroupBy } from "../../outputs/EquipmentGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Equipment)
export class GroupByEquipmentResolver {
  @TypeGraphQL.Query(_returns => [EquipmentGroupBy], {
    nullable: false
  })
  async groupByEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEquipmentArgs): Promise<EquipmentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).equipment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
