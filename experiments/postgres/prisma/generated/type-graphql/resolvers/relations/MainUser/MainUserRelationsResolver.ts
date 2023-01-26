import * as TypeGraphQL from "type-graphql";
import { MainUser } from "../../../models/MainUser";
import { Post } from "../../../models/Post";
import { MainUserPostsArgs } from "./args/MainUserPostsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MainUser)
export class MainUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async clientPosts(@TypeGraphQL.Root() mainUser: MainUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args(_returns => MainUserPostsArgs) args: MainUserPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: mainUser.id,
      },
    }).posts(args);
  }
}
