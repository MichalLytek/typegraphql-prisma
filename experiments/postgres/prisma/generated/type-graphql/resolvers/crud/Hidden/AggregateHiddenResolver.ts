import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateHiddenArgs } from "./args/AggregateHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { AggregateHidden } from "../../outputs/AggregateHidden";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hidden)
export class AggregateHiddenResolver {
  @TypeGraphQL.Query(_returns => AggregateHidden, {
    nullable: false
  })
  async aggregateHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateHiddenArgs) args: AggregateHiddenArgs): Promise<AggregateHidden> {
    return getPrismaFromContext(ctx).hidden.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
