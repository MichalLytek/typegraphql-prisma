import * as TypeGraphQL from "type-graphql";
import { FindManyClientArgs } from "./args/FindManyClientArgs";
import { Client } from "../../../models/Client";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class FindManyClientResolver {
  @TypeGraphQL.Query(_returns => [Client], {
    nullable: false
  })
  async clients(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyClientArgs): Promise<Client[]> {
    return getPrismaFromContext(ctx).user.findMany(args);
  }
}
