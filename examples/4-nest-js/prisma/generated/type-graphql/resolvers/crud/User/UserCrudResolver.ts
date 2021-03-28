import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { UpsertUserArgs } from "./args/UpsertUserArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser } from "../../outputs/AggregateUser";

@TypeGraphQL.Resolver(_of => User)
export class UserCrudResolver {
  @TypeGraphQL.Query(_returns => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueUserArgs): Promise<User | null> {
    return getPrismaFromContext(ctx).user.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => User, {
    nullable: true
  })
  async findFirstUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstUserArgs): Promise<User | null> {
    return getPrismaFromContext(ctx).user.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyUserArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false
  })
  async createUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateUserArgs): Promise<User> {
    return getPrismaFromContext(ctx).user.create(args);
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: true
  })
  async deleteUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteUserArgs): Promise<User | null> {
    return getPrismaFromContext(ctx).user.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: true
  })
  async updateUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateUserArgs): Promise<User | null> {
    return getPrismaFromContext(ctx).user.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyUserArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).user.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyUserArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).user.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false
  })
  async upsertUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertUserArgs): Promise<User> {
    return getPrismaFromContext(ctx).user.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateUser, {
    nullable: false
  })
  async aggregateUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserArgs): Promise<AggregateUser> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
