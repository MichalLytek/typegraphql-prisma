import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyHiddenArgs } from "./args/FindManyHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hidden)
export class FindManyHiddenResolver {
  @TypeGraphQL.Query(_returns => [Hidden], {
    nullable: false
  })
  async hiddens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => FindManyHiddenArgs) args: FindManyHiddenArgs): Promise<Hidden[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
