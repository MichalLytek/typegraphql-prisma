import * as TypeGraphQL from "type-graphql";
import { MainUser } from "../../../models/MainUser";
import { Post } from "../../../models/Post";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => MainUser, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<MainUser> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        uuid: post.uuid,
      },
    }).author({});
  }
}
