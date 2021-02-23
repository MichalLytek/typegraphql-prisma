import * as TypeGraphQL from "type-graphql";
import { UpsertDirectorArgs } from "./args/UpsertDirectorArgs";
import { Director } from "../../../models/Director";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Director)
export class UpsertDirectorResolver {
  @TypeGraphQL.Mutation(_returns => Director, {
    nullable: false
  })
  async upsertDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertDirectorArgs): Promise<Director> {
    return getPrismaFromContext(ctx).director.upsert(args);
  }
}
