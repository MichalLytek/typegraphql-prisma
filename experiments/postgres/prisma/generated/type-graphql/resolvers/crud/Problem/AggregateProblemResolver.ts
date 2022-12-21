import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProblemArgs } from "./args/AggregateProblemArgs";
import { Problem } from "../../../models/Problem";
import { AggregateProblem } from "../../outputs/AggregateProblem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class AggregateProblemResolver {
  @TypeGraphQL.Query(_returns => AggregateProblem, {
    nullable: false
  })
  async aggregateProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProblemArgs): Promise<AggregateProblem> {
    return getPrismaFromContext(ctx).problem.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
