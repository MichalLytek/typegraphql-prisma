import * as TypeGraphQL from "type-graphql";
import { CreateManyPostArgs } from "./args/CreateManyPostArgs";
import { Post } from "../../../models/Post";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class CreateManyPostResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyPostArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.post.createMany(args);
  }
}
