import * as TypeGraphQL from "type-graphql";
import { CreateManyClientArgs } from "./args/CreateManyClientArgs";
import { Client } from "../../../models/Client";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Client)
export class CreateManyClientResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyClientArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.user.createMany(args);
  }
}
