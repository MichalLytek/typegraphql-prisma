import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Creator } from "../../../models/Creator";
import { Problem } from "../../../models/Problem";
import { CreatorLikesArgs } from "./args/CreatorLikesArgs";
import { CreatorProblemsArgs } from "./args/CreatorProblemsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class CreatorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Problem], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() creator: Creator, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreatorLikesArgs) args: CreatorLikesArgs): Promise<Problem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.findUniqueOrThrow({
      where: {
        id: creator.id,
      },
    }).likes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Problem], {
    nullable: false
  })
  async problems(@TypeGraphQL.Root() creator: Creator, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreatorProblemsArgs) args: CreatorProblemsArgs): Promise<Problem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.findUniqueOrThrow({
      where: {
        id: creator.id,
      },
    }).problems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
