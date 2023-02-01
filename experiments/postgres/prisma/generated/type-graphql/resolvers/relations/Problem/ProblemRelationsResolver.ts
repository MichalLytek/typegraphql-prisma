import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Creator } from "../../../models/Creator";
import { Problem } from "../../../models/Problem";
import { ProblemCreatorArgs } from "./args/ProblemCreatorArgs";
import { ProblemLikedByArgs } from "./args/ProblemLikedByArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class ProblemRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Creator], {
    nullable: false
  })
  async likedBy(@TypeGraphQL.Root() problem: Problem, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => ProblemLikedByArgs) args: ProblemLikedByArgs): Promise<Creator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).problem.findUnique({
      where: {
        id: problem.id,
      },
    }).likedBy({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Creator, {
    nullable: true
  })
  async creator(@TypeGraphQL.Root() problem: Problem, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => ProblemCreatorArgs) args: ProblemCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).problem.findUnique({
      where: {
        id: problem.id,
      },
    }).creator({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
