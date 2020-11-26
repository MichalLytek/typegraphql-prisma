import * as TypeGraphQL from "type-graphql";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => User)
export class FindUniqueUserResolver {
  @TypeGraphQL.Query(_returns => User, {
    nullable: true,
    description: undefined
  })
  async user(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueUserArgs): Promise<User | null> {
    return ctx.prisma.user.findUnique(args);
  }
}
