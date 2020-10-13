import * as TypeGraphQL from "type-graphql";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => User)
export class FindFirstUserResolver {
  @TypeGraphQL.Query(_returns => User, {
    nullable: true,
    description: undefined
  })
  async findFirstUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstUserArgs): Promise<User | null> {
    return ctx.prisma.user.findFirst(args);
  }
}
