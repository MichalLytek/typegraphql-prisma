import * as TypeGraphQL from "type-graphql";
import { CreateClientArgs } from "./args/CreateClientArgs";
import { Client } from "../../../models/Client";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class CreateClientResolver {
  @TypeGraphQL.Mutation(_returns => Client, {
    nullable: false
  })
  async createClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateClientArgs): Promise<Client> {
    return getPrismaFromContext(ctx).user.create(args);
  }
}
