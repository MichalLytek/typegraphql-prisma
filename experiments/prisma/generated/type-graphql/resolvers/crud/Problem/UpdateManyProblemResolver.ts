import * as TypeGraphQL from "type-graphql";
import { UpdateManyProblemArgs } from "./args/UpdateManyProblemArgs";
import { Problem } from "../../../models/Problem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class UpdateManyProblemResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProblemArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.problem.updateMany(args);
  }
}
