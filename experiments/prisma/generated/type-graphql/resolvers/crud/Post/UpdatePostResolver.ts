import * as TypeGraphQL from "type-graphql";
import { UpdatePostArgs } from "./args/UpdatePostArgs";
import { Post } from "../../../models/Post";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class UpdatePostResolver {
  @TypeGraphQL.Mutation(_returns => Post, {
    nullable: true
  })
  async updatePost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdatePostArgs): Promise<Post | null> {
    return getPrismaFromContext(ctx).post.update(args);
  }
}
