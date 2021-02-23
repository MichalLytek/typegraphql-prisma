import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByDirectorArgs } from "./args/GroupByDirectorArgs";
import { Director } from "../../../models/Director";
import { DirectorGroupBy } from "../../outputs/DirectorGroupBy";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Director)
export class GroupByDirectorResolver {
  @TypeGraphQL.Query(_returns => [DirectorGroupBy], {
    nullable: false
  })
  async groupByDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDirectorArgs): Promise<DirectorGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return ctx.prisma.director.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
