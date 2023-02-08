import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueHiddenOrThrowArgs } from "./args/FindUniqueHiddenOrThrowArgs";
import { Hidden } from "../../../models/Hidden";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hidden)
export class FindUniqueHiddenOrThrowResolver {
  @TypeGraphQL.Query(_returns => Hidden, {
    nullable: true
  })
  async getHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => FindUniqueHiddenOrThrowArgs) args: FindUniqueHiddenOrThrowArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
