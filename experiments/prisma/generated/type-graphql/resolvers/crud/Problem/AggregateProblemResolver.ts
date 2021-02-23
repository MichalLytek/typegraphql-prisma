import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProblemArgs } from "./args/AggregateProblemArgs";
import { Problem } from "../../../models/Problem";
import { AggregateProblem } from "../../outputs/AggregateProblem";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class AggregateProblemResolver {
  @TypeGraphQL.Query(_returns => AggregateProblem, {
    nullable: false
  })
  async aggregateProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProblemArgs): Promise<AggregateProblem> {
    return ctx.prisma.problem.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
