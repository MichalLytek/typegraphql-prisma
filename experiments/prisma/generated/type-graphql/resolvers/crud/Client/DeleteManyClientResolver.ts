import * as TypeGraphQL from "type-graphql";
import { DeleteManyClientArgs } from "./args/DeleteManyClientArgs";
import { Client } from "../../../models/Client";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class DeleteManyClientResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyClientArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.user.deleteMany(args);
  }
}
