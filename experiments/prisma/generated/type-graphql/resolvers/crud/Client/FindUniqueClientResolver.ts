import * as TypeGraphQL from "type-graphql";
import { FindUniqueClientArgs } from "./args/FindUniqueClientArgs";
import { Client } from "../../../models/Client";

@TypeGraphQL.Resolver(_of => Client)
export class FindUniqueClientResolver {
  @TypeGraphQL.Query(_returns => Client, {
    nullable: true,
    description: undefined
  })
  async client(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueClientArgs): Promise<Client | null> {
    return ctx.prisma.user.findUnique(args);
  }
}
