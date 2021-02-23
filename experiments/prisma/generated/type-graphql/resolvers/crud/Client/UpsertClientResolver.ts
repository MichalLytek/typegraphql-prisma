import * as TypeGraphQL from "type-graphql";
import { UpsertClientArgs } from "./args/UpsertClientArgs";
import { Client } from "../../../models/Client";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class UpsertClientResolver {
  @TypeGraphQL.Mutation(_returns => Client, {
    nullable: false
  })
  async upsertClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertClientArgs): Promise<Client> {
    return ctx.prisma.user.upsert(args);
  }
}
