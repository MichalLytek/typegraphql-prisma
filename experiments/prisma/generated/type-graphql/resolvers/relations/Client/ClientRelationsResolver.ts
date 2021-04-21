import * as TypeGraphQL from "type-graphql";
import { Client } from "../../../models/Client";
import { Post } from "../../../models/Post";
import { ClientPostsArgs } from "./args/ClientPostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class ClientRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async clientPosts(@TypeGraphQL.Root() client: Client, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ClientPostsArgs): Promise<Post[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: client.id,
      },
    }).posts(args);
  }
}
