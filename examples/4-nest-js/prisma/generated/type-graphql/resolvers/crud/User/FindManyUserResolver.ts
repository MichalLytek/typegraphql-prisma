import * as TypeGraphQL from "type-graphql";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class FindManyUserResolver {
  @TypeGraphQL.Query(_returns => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUserArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findMany(args);
  }
}
