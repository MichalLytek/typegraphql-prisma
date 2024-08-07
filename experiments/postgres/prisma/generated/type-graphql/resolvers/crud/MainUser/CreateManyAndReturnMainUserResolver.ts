import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMainUserArgs } from "./args/CreateManyAndReturnMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { CreateManyAndReturnMainUser } from "../../outputs/CreateManyAndReturnMainUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MainUser)
export class CreateManyAndReturnMainUserResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMainUser], {
    nullable: false
  })
  async createManyAndReturnMainUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnMainUserArgs) args: CreateManyAndReturnMainUserArgs): Promise<CreateManyAndReturnMainUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
