import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueHiddenArgs } from "./args/FindUniqueHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hidden)
export class FindUniqueHiddenResolver {
  @TypeGraphQL.Query(_returns => Hidden, {
    nullable: true
  })
  async hidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => FindUniqueHiddenArgs) args: FindUniqueHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
