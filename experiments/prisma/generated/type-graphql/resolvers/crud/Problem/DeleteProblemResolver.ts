import * as TypeGraphQL from "type-graphql";
import { DeleteProblemArgs } from "./args/DeleteProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class DeleteProblemResolver {
  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: true
  })
  async deleteProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProblemArgs): Promise<Problem | null> {
    return ctx.prisma.problem.delete(args);
  }
}
