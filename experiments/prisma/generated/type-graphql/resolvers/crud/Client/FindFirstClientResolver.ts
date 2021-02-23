import * as TypeGraphQL from "type-graphql";
import { FindFirstClientArgs } from "./args/FindFirstClientArgs";
import { Client } from "../../../models/Client";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class FindFirstClientResolver {
  @TypeGraphQL.Query(_returns => Client, {
    nullable: true
  })
  async findFirstClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstClientArgs): Promise<Client | null> {
    return ctx.prisma.user.findFirst(args);
  }
}
