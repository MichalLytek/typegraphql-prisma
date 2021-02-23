import * as TypeGraphQL from "type-graphql";
import { UpdateProblemArgs } from "./args/UpdateProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class UpdateProblemResolver {
  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: true
  })
  async updateProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProblemArgs): Promise<Problem | null> {
    return getPrismaFromContext(ctx).problem.update(args);
  }
}
