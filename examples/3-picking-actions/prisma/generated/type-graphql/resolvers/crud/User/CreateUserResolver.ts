import * as TypeGraphQL from "type-graphql";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class CreateUserResolver {
  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false
  })
  async createUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUserArgs): Promise<User> {
    return getPrismaFromContext(ctx).user.create(args);
  }
}
