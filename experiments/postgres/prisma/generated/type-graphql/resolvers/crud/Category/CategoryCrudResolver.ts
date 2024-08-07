import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryArgs } from "./args/AggregateCategoryArgs";
import { CreateManyAndReturnCategoryArgs } from "./args/CreateManyAndReturnCategoryArgs";
import { CreateManyCategoryArgs } from "./args/CreateManyCategoryArgs";
import { CreateOneCategoryArgs } from "./args/CreateOneCategoryArgs";
import { DeleteManyCategoryArgs } from "./args/DeleteManyCategoryArgs";
import { DeleteOneCategoryArgs } from "./args/DeleteOneCategoryArgs";
import { FindFirstCategoryArgs } from "./args/FindFirstCategoryArgs";
import { FindFirstCategoryOrThrowArgs } from "./args/FindFirstCategoryOrThrowArgs";
import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";
import { FindUniqueCategoryArgs } from "./args/FindUniqueCategoryArgs";
import { FindUniqueCategoryOrThrowArgs } from "./args/FindUniqueCategoryOrThrowArgs";
import { GroupByCategoryArgs } from "./args/GroupByCategoryArgs";
import { UpdateManyCategoryArgs } from "./args/UpdateManyCategoryArgs";
import { UpdateOneCategoryArgs } from "./args/UpdateOneCategoryArgs";
import { UpsertOneCategoryArgs } from "./args/UpsertOneCategoryArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Category } from "../../../models/Category";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCategory } from "../../outputs/AggregateCategory";
import { CategoryGroupBy } from "../../outputs/CategoryGroupBy";
import { CreateManyAndReturnCategory } from "../../outputs/CreateManyAndReturnCategory";

@TypeGraphQL.Resolver(_of => Category)
export class CategoryCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCategory, {
    nullable: false
  })
  async aggregateCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateCategoryArgs) args: AggregateCategoryArgs): Promise<AggregateCategory> {
    return getPrismaFromContext(ctx).category.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyCategoryArgs) args: CreateManyCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => Category, {
    nullable: false
  })
  async createOneCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneCategoryArgs) args: CreateOneCategoryArgs): Promise<Category> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyCategoryArgs) args: DeleteManyCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Category, {
    nullable: true
  })
  async deleteOneCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneCategoryArgs) args: DeleteOneCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Category, {
    nullable: true
  })
  async findFirstCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstCategoryArgs) args: FindFirstCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Category, {
    nullable: true
  })
  async findFirstCategoryOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstCategoryOrThrowArgs) args: FindFirstCategoryOrThrowArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Category], {
    nullable: false
  })
  async categories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyCategoryArgs) args: FindManyCategoryArgs): Promise<Category[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Category, {
    nullable: true
  })
  async category(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueCategoryArgs) args: FindUniqueCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Category, {
    nullable: true
  })
  async getCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueCategoryOrThrowArgs) args: FindUniqueCategoryOrThrowArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CategoryGroupBy], {
    nullable: false
  })
  async groupByCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByCategoryArgs) args: GroupByCategoryArgs): Promise<CategoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyCategoryArgs) args: UpdateManyCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Category, {
    nullable: true
  })
  async updateOneCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneCategoryArgs) args: UpdateOneCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Category, {
    nullable: false
  })
  async upsertOneCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneCategoryArgs) args: UpsertOneCategoryArgs): Promise<Category> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
