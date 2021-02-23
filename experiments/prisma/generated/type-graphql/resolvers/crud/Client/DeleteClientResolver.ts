import * as TypeGraphQL from "type-graphql";
import { DeleteClientArgs } from "./args/DeleteClientArgs";
import { Client } from "../../../models/Client";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class DeleteClientResolver {
  @TypeGraphQL.Mutation(_returns => Client, {
    nullable: true
  })
  async deleteClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteClientArgs): Promise<Client | null> {
    return getPrismaFromContext(ctx).user.delete(args);
  }
}
