import * as TypeGraphQL from "type-graphql";
import { FindUniqueProblemArgs } from "./args/FindUniqueProblemArgs";
import { Problem } from "../../../models/Problem";

@TypeGraphQL.Resolver(_of => Problem)
export class FindUniqueProblemResolver {
  @TypeGraphQL.Query(_returns => Problem, {
    nullable: true,
    description: undefined
  })
  async problem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueProblemArgs): Promise<Problem | null> {
    return ctx.prisma.problem.findUnique(args);
  }
}
