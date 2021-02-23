import * as TypeGraphQL from "type-graphql";
import { CreatePostArgs } from "./args/CreatePostArgs";
import { Post } from "../../../models/Post";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class CreatePostResolver {
  @TypeGraphQL.Mutation(_returns => Post, {
    nullable: false
  })
  async createPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatePostArgs): Promise<Post> {
    return getPrismaFromContext(ctx).post.create(args);
  }
}
