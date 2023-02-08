import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneHiddenArgs } from "./args/UpsertOneHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hidden)
export class UpsertOneHiddenResolver {
  @TypeGraphQL.Mutation(_returns => Hidden, {
    nullable: false
  })
  async upsertOneHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => UpsertOneHiddenArgs) args: UpsertOneHiddenArgs): Promise<Hidden> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
