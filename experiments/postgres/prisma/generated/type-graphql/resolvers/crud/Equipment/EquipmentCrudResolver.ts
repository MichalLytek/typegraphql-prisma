import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEquipmentArgs } from "./args/AggregateEquipmentArgs";
import { CreateManyEquipmentArgs } from "./args/CreateManyEquipmentArgs";
import { CreateOneEquipmentArgs } from "./args/CreateOneEquipmentArgs";
import { DeleteManyEquipmentArgs } from "./args/DeleteManyEquipmentArgs";
import { DeleteOneEquipmentArgs } from "./args/DeleteOneEquipmentArgs";
import { FindFirstEquipmentArgs } from "./args/FindFirstEquipmentArgs";
import { FindFirstEquipmentOrThrowArgs } from "./args/FindFirstEquipmentOrThrowArgs";
import { FindManyEquipmentArgs } from "./args/FindManyEquipmentArgs";
import { FindUniqueEquipmentArgs } from "./args/FindUniqueEquipmentArgs";
import { FindUniqueEquipmentOrThrowArgs } from "./args/FindUniqueEquipmentOrThrowArgs";
import { GroupByEquipmentArgs } from "./args/GroupByEquipmentArgs";
import { UpdateManyEquipmentArgs } from "./args/UpdateManyEquipmentArgs";
import { UpdateOneEquipmentArgs } from "./args/UpdateOneEquipmentArgs";
import { UpsertOneEquipmentArgs } from "./args/UpsertOneEquipmentArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Equipment } from "../../../models/Equipment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEquipment } from "../../outputs/AggregateEquipment";
import { EquipmentGroupBy } from "../../outputs/EquipmentGroupBy";

@TypeGraphQL.Resolver(_of => Equipment)
export class EquipmentCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEquipment, {
    nullable: false
  })
  async aggregateEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => AggregateEquipmentArgs) args: AggregateEquipmentArgs): Promise<AggregateEquipment> {
    return getPrismaFromContext(ctx).equipment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => CreateManyEquipmentArgs) args: CreateManyEquipmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Equipment, {
    nullable: false
  })
  async createOneEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => CreateOneEquipmentArgs) args: CreateOneEquipmentArgs): Promise<Equipment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => DeleteManyEquipmentArgs) args: DeleteManyEquipmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Equipment, {
    nullable: true
  })
  async deleteOneEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => DeleteOneEquipmentArgs) args: DeleteOneEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Equipment, {
    nullable: true
  })
  async findFirstEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => FindFirstEquipmentArgs) args: FindFirstEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Equipment, {
    nullable: true
  })
  async findFirstEquipmentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => FindFirstEquipmentOrThrowArgs) args: FindFirstEquipmentOrThrowArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Equipment], {
    nullable: false
  })
  async equipments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => FindManyEquipmentArgs) args: FindManyEquipmentArgs): Promise<Equipment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Equipment, {
    nullable: true
  })
  async equipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => FindUniqueEquipmentArgs) args: FindUniqueEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Equipment, {
    nullable: true
  })
  async getEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => FindUniqueEquipmentOrThrowArgs) args: FindUniqueEquipmentOrThrowArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EquipmentGroupBy], {
    nullable: false
  })
  async groupByEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => GroupByEquipmentArgs) args: GroupByEquipmentArgs): Promise<EquipmentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => UpdateManyEquipmentArgs) args: UpdateManyEquipmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Equipment, {
    nullable: true
  })
  async updateOneEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => UpdateOneEquipmentArgs) args: UpdateOneEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Equipment, {
    nullable: false
  })
  async upsertOneEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => UpsertOneEquipmentArgs) args: UpsertOneEquipmentArgs): Promise<Equipment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
