import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPostArgs } from "./args/GroupByPostArgs";
import { Post } from "../../../models/Post";
import { PostGroupBy } from "../../outputs/PostGroupBy";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class GroupByPostResolver {
  @TypeGraphQL.Query(_returns => [PostGroupBy], {
    nullable: false
  })
  async groupByPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPostArgs): Promise<PostGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return ctx.prisma.post.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
