import * as TypeGraphQL from "type-graphql";
import { FindUniqueClientArgs } from "./args/FindUniqueClientArgs";
import { Client } from "../../../models/Client";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class FindUniqueClientResolver {
  @TypeGraphQL.Query(_returns => Client, {
    nullable: true
  })
  async client(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueClientArgs): Promise<Client | null> {
    return getPrismaFromContext(ctx).user.findUnique(args);
  }
}
