import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneHiddenArgs } from "./args/CreateOneHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hidden)
export class CreateOneHiddenResolver {
  @TypeGraphQL.Mutation(_returns => Hidden, {
    nullable: false
  })
  async createOneHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => CreateOneHiddenArgs) args: CreateOneHiddenArgs): Promise<Hidden> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
