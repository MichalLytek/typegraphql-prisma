import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnProblemArgs } from "./args/CreateManyAndReturnProblemArgs";
import { Problem } from "../../../models/Problem";
import { CreateManyAndReturnProblem } from "../../outputs/CreateManyAndReturnProblem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class CreateManyAndReturnProblemResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnProblem], {
    nullable: false
  })
  async createManyAndReturnProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnProblemArgs) args: CreateManyAndReturnProblemArgs): Promise<CreateManyAndReturnProblem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).problem.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
