import * as TypeGraphQL from "type-graphql";
import { UpsertUserArgs } from "./args/UpsertUserArgs";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UpsertUserResolver {
  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false
  })
  async upsertUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUserArgs): Promise<User> {
    return getPrismaFromContext(ctx).user.upsert(args);
  }
}
