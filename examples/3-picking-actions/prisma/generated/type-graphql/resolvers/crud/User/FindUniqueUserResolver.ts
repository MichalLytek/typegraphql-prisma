import * as TypeGraphQL from "type-graphql";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class FindUniqueUserResolver {
  @TypeGraphQL.Query(_returns => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueUserArgs): Promise<User | null> {
    return getPrismaFromContext(ctx).user.findUnique(args);
  }
}
