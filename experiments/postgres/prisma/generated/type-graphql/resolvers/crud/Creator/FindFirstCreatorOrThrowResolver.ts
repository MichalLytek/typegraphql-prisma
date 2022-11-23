import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCreatorOrThrowArgs } from "./args/FindFirstCreatorOrThrowArgs";
import { Creator } from "../../../models/Creator";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class FindFirstCreatorOrThrowResolver {
  @TypeGraphQL.Query(_returns => Creator, {
    nullable: true
  })
  async findFirstCreatorOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCreatorOrThrowArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
