import * as TypeGraphQL from "type-graphql";
import { FindFirstProblemArgs } from "./args/FindFirstProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class FindFirstProblemResolver {
  @TypeGraphQL.Query(_returns => Problem, {
    nullable: true
  })
  async findFirstProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstProblemArgs): Promise<Problem | null> {
    return getPrismaFromContext(ctx).problem.findFirst(args);
  }
}
