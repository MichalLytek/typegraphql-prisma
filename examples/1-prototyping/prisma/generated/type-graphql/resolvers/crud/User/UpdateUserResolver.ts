import * as TypeGraphQL from "type-graphql";
import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UpdateUserResolver {
  @TypeGraphQL.Mutation(_returns => User, {
    nullable: true
  })
  async updateUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUserArgs): Promise<User | null> {
    return getPrismaFromContext(ctx).user.update(args);
  }
}
