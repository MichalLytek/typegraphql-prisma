import * as TypeGraphQL from "type-graphql";
import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class DeleteUserResolver {
  @TypeGraphQL.Mutation(_returns => User, {
    nullable: true
  })
  async deleteUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUserArgs): Promise<User | null> {
    return getPrismaFromContext(ctx).user.delete(args);
  }
}
