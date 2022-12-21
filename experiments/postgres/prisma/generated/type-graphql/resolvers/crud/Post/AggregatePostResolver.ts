import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostArgs } from "./args/AggregatePostArgs";
import { Post } from "../../../models/Post";
import { AggregatePost } from "../../outputs/AggregatePost";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class AggregatePostResolver {
  @TypeGraphQL.Query(_returns => AggregatePost, {
    nullable: false
  })
  async aggregatePost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostArgs): Promise<AggregatePost> {
    return getPrismaFromContext(ctx).post.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
