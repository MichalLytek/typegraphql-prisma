import * as TypeGraphQL from "type-graphql";
import { CreateManyProblemArgs } from "./args/CreateManyProblemArgs";
import { Problem } from "../../../models/Problem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class CreateManyProblemResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyProblemArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.problem.createMany(args);
  }
}
