import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCreatorArgs } from "./args/AggregateCreatorArgs";
import { CreateCreatorArgs } from "./args/CreateCreatorArgs";
import { CreateManyCreatorArgs } from "./args/CreateManyCreatorArgs";
import { DeleteCreatorArgs } from "./args/DeleteCreatorArgs";
import { DeleteManyCreatorArgs } from "./args/DeleteManyCreatorArgs";
import { FindFirstCreatorArgs } from "./args/FindFirstCreatorArgs";
import { FindManyCreatorArgs } from "./args/FindManyCreatorArgs";
import { FindUniqueCreatorArgs } from "./args/FindUniqueCreatorArgs";
import { GroupByCreatorArgs } from "./args/GroupByCreatorArgs";
import { UpdateCreatorArgs } from "./args/UpdateCreatorArgs";
import { UpdateManyCreatorArgs } from "./args/UpdateManyCreatorArgs";
import { UpsertCreatorArgs } from "./args/UpsertCreatorArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Creator } from "../../../models/Creator";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCreator } from "../../outputs/AggregateCreator";
import { CreatorGroupBy } from "../../outputs/CreatorGroupBy";

@TypeGraphQL.Resolver(_of => Creator)
export class CreatorCrudResolver {
  @TypeGraphQL.Query(_returns => Creator, {
    nullable: true
  })
  async creator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCreatorArgs): Promise<Creator | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).creator.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Creator, {
    nullable: true
  })
  async findFirstCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCreatorArgs): Promise<Creator | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).creator.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Creator], {
    nullable: false
  })
  async creators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCreatorArgs): Promise<Creator[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).creator.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: false
  })
  async createCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCreatorArgs): Promise<Creator> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).creator.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCreatorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).creator.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: true
  })
  async deleteCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteCreatorArgs): Promise<Creator | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).creator.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: true
  })
  async updateCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateCreatorArgs): Promise<Creator | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).creator.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCreatorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).creator.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCreatorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).creator.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: false
  })
  async upsertCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertCreatorArgs): Promise<Creator> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).creator.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateCreator, {
    nullable: false
  })
  async aggregateCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCreatorArgs): Promise<AggregateCreator> {
    return getPrismaFromContext(ctx).creator.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [CreatorGroupBy], {
    nullable: false
  })
  async groupByCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCreatorArgs): Promise<CreatorGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).creator.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
