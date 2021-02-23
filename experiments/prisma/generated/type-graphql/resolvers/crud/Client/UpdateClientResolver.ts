import * as TypeGraphQL from "type-graphql";
import { UpdateClientArgs } from "./args/UpdateClientArgs";
import { Client } from "../../../models/Client";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class UpdateClientResolver {
  @TypeGraphQL.Mutation(_returns => Client, {
    nullable: true
  })
  async updateClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateClientArgs): Promise<Client | null> {
    return ctx.prisma.user.update(args);
  }
}
