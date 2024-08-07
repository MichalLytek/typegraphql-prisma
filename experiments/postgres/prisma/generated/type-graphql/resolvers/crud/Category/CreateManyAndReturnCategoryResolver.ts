import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCategoryArgs } from "./args/CreateManyAndReturnCategoryArgs";
import { Category } from "../../../models/Category";
import { CreateManyAndReturnCategory } from "../../outputs/CreateManyAndReturnCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Category)
export class CreateManyAndReturnCategoryResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCategory], {
    nullable: false
  })
  async createManyAndReturnCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnCategoryArgs) args: CreateManyAndReturnCategoryArgs): Promise<CreateManyAndReturnCategory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
