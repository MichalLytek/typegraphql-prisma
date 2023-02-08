import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByHiddenArgs } from "./args/GroupByHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { HiddenGroupBy } from "../../outputs/HiddenGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hidden)
export class GroupByHiddenResolver {
  @TypeGraphQL.Query(_returns => [HiddenGroupBy], {
    nullable: false
  })
  async groupByHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => GroupByHiddenArgs) args: GroupByHiddenArgs): Promise<HiddenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
