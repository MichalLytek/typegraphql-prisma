import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPostArgs } from "./args/CreateManyAndReturnPostArgs";
import { Post } from "../../../models/Post";
import { CreateManyAndReturnPost } from "../../outputs/CreateManyAndReturnPost";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class CreateManyAndReturnPostResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPost], {
    nullable: false
  })
  async createManyAndReturnPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnPostArgs) args: CreateManyAndReturnPostArgs): Promise<CreateManyAndReturnPost[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).post.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
