import * as TypeGraphQL from "type-graphql";
import { FindFirstPostArgs } from "./args/FindFirstPostArgs";
import { Post } from "../../../models/Post";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class FindFirstPostResolver {
  @TypeGraphQL.Query(_returns => Post, {
    nullable: true
  })
  async findFirstPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstPostArgs): Promise<Post | null> {
    return getPrismaFromContext(ctx).post.findFirst(args);
  }
}
