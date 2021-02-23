import * as TypeGraphQL from "type-graphql";
import { FindUniquePostArgs } from "./args/FindUniquePostArgs";
import { Post } from "../../../models/Post";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class FindUniquePostResolver {
  @TypeGraphQL.Query(_returns => Post, {
    nullable: true
  })
  async post(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePostArgs): Promise<Post | null> {
    return getPrismaFromContext(ctx).post.findUnique(args);
  }
}
