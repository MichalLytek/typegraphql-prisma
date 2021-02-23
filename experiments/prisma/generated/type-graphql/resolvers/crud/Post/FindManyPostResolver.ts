import * as TypeGraphQL from "type-graphql";
import { FindManyPostArgs } from "./args/FindManyPostArgs";
import { Post } from "../../../models/Post";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class FindManyPostResolver {
  @TypeGraphQL.Query(_returns => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPostArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).post.findMany(args);
  }
}
