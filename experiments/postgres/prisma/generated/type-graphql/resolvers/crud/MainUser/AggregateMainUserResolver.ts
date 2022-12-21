import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMainUserArgs } from "./args/AggregateMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { AggregateMainUser } from "../../outputs/AggregateMainUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MainUser)
export class AggregateMainUserResolver {
  @TypeGraphQL.Query(_returns => AggregateMainUser, {
    nullable: false
  })
  async aggregateMainUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMainUserArgs): Promise<AggregateMainUser> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
