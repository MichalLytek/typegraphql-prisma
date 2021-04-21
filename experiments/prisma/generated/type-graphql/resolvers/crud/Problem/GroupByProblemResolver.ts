import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByProblemArgs } from "./args/GroupByProblemArgs";
import { Problem } from "../../../models/Problem";
import { ProblemGroupBy } from "../../outputs/ProblemGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class GroupByProblemResolver {
  @TypeGraphQL.Query(_returns => [ProblemGroupBy], {
    nullable: false
  })
  async groupByProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProblemArgs): Promise<ProblemGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
