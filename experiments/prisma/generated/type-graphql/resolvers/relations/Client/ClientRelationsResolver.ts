import * as TypeGraphQL from "type-graphql";
import { Client } from "../../../models/Client";
import { Post } from "../../../models/Post";
import { ClientPostsArgs } from "./args/ClientPostsArgs";

@TypeGraphQL.Resolver(_of => Client)
export class ClientRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: true
  })
  async clientPosts(@TypeGraphQL.Root() client: Client, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ClientPostsArgs): Promise<Post[] | null> {
    return ctx.prisma.user.findUnique({
      where: {
        id: client.id,
      },
    }).posts(args);
  }
}
