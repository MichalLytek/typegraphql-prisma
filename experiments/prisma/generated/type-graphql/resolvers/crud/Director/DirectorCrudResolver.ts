import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDirectorArgs } from "./args/AggregateDirectorArgs";
import { CreateDirectorArgs } from "./args/CreateDirectorArgs";
import { CreateManyDirectorArgs } from "./args/CreateManyDirectorArgs";
import { DeleteDirectorArgs } from "./args/DeleteDirectorArgs";
import { DeleteManyDirectorArgs } from "./args/DeleteManyDirectorArgs";
import { FindFirstDirectorArgs } from "./args/FindFirstDirectorArgs";
import { FindManyDirectorArgs } from "./args/FindManyDirectorArgs";
import { FindUniqueDirectorArgs } from "./args/FindUniqueDirectorArgs";
import { GroupByDirectorArgs } from "./args/GroupByDirectorArgs";
import { UpdateDirectorArgs } from "./args/UpdateDirectorArgs";
import { UpdateManyDirectorArgs } from "./args/UpdateManyDirectorArgs";
import { UpsertDirectorArgs } from "./args/UpsertDirectorArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Director } from "../../../models/Director";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDirector } from "../../outputs/AggregateDirector";
import { DirectorGroupBy } from "../../outputs/DirectorGroupBy";

@TypeGraphQL.Resolver(_of => Director)
export class DirectorCrudResolver {
  @TypeGraphQL.Query(_returns => Director, {
    nullable: true
  })
  async director(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDirectorArgs): Promise<Director | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).director.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Director, {
    nullable: true
  })
  async findFirstDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDirectorArgs): Promise<Director | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).director.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Director], {
    nullable: false
  })
  async directors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyDirectorArgs): Promise<Director[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).director.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Director, {
    nullable: false
  })
  async createDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateDirectorArgs): Promise<Director> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).director.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyDirectorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).director.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Director, {
    nullable: true
  })
  async deleteDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteDirectorArgs): Promise<Director | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).director.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Director, {
    nullable: true
  })
  async updateDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateDirectorArgs): Promise<Director | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).director.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyDirectorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).director.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyDirectorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).director.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Director, {
    nullable: false
  })
  async upsertDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertDirectorArgs): Promise<Director> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).director.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateDirector, {
    nullable: false
  })
  async aggregateDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDirectorArgs): Promise<AggregateDirector> {
    return getPrismaFromContext(ctx).director.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [DirectorGroupBy], {
    nullable: false
  })
  async groupByDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDirectorArgs): Promise<DirectorGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).director.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
