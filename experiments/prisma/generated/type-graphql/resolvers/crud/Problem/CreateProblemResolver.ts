import * as TypeGraphQL from "type-graphql";
import { CreateProblemArgs } from "./args/CreateProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class CreateProblemResolver {
  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: false
  })
  async createProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProblemArgs): Promise<Problem> {
    return getPrismaFromContext(ctx).problem.create(args);
  }
}
