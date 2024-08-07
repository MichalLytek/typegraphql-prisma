import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCreatorArgs } from "./args/AggregateCreatorArgs";
import { CreateManyAndReturnCreatorArgs } from "./args/CreateManyAndReturnCreatorArgs";
import { CreateManyCreatorArgs } from "./args/CreateManyCreatorArgs";
import { CreateOneCreatorArgs } from "./args/CreateOneCreatorArgs";
import { DeleteManyCreatorArgs } from "./args/DeleteManyCreatorArgs";
import { DeleteOneCreatorArgs } from "./args/DeleteOneCreatorArgs";
import { FindFirstCreatorArgs } from "./args/FindFirstCreatorArgs";
import { FindFirstCreatorOrThrowArgs } from "./args/FindFirstCreatorOrThrowArgs";
import { FindManyCreatorArgs } from "./args/FindManyCreatorArgs";
import { FindUniqueCreatorArgs } from "./args/FindUniqueCreatorArgs";
import { FindUniqueCreatorOrThrowArgs } from "./args/FindUniqueCreatorOrThrowArgs";
import { GroupByCreatorArgs } from "./args/GroupByCreatorArgs";
import { UpdateManyCreatorArgs } from "./args/UpdateManyCreatorArgs";
import { UpdateOneCreatorArgs } from "./args/UpdateOneCreatorArgs";
import { UpsertOneCreatorArgs } from "./args/UpsertOneCreatorArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Creator } from "../../../models/Creator";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCreator } from "../../outputs/AggregateCreator";
import { CreateManyAndReturnCreator } from "../../outputs/CreateManyAndReturnCreator";
import { CreatorGroupBy } from "../../outputs/CreatorGroupBy";

@TypeGraphQL.Resolver(_of => Creator)
export class CreatorCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCreator, {
    nullable: false
  })
  async aggregateCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateCreatorArgs) args: AggregateCreatorArgs): Promise<AggregateCreator> {
    return getPrismaFromContext(ctx).creator.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyCreatorArgs) args: CreateManyCreatorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCreator], {
    nullable: false
  })
  async createManyAndReturnCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnCreatorArgs) args: CreateManyAndReturnCreatorArgs): Promise<CreateManyAndReturnCreator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: false
  })
  async createOneCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneCreatorArgs) args: CreateOneCreatorArgs): Promise<Creator> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyCreatorArgs) args: DeleteManyCreatorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: true
  })
  async deleteOneCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneCreatorArgs) args: DeleteOneCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Creator, {
    nullable: true
  })
  async findFirstCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstCreatorArgs) args: FindFirstCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Creator, {
    nullable: true
  })
  async findFirstCreatorOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstCreatorOrThrowArgs) args: FindFirstCreatorOrThrowArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Creator], {
    nullable: false
  })
  async creators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyCreatorArgs) args: FindManyCreatorArgs): Promise<Creator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Creator, {
    nullable: true
  })
  async creator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueCreatorArgs) args: FindUniqueCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Creator, {
    nullable: true
  })
  async getCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueCreatorOrThrowArgs) args: FindUniqueCreatorOrThrowArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CreatorGroupBy], {
    nullable: false
  })
  async groupByCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByCreatorArgs) args: GroupByCreatorArgs): Promise<CreatorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyCreatorArgs) args: UpdateManyCreatorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: true
  })
  async updateOneCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneCreatorArgs) args: UpdateOneCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: false
  })
  async upsertOneCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneCreatorArgs) args: UpsertOneCreatorArgs): Promise<Creator> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
