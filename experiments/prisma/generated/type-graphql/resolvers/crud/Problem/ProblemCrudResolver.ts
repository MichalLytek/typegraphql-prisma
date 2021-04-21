import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProblemArgs } from "./args/AggregateProblemArgs";
import { CreateManyProblemArgs } from "./args/CreateManyProblemArgs";
import { CreateProblemArgs } from "./args/CreateProblemArgs";
import { DeleteManyProblemArgs } from "./args/DeleteManyProblemArgs";
import { DeleteProblemArgs } from "./args/DeleteProblemArgs";
import { FindFirstProblemArgs } from "./args/FindFirstProblemArgs";
import { FindManyProblemArgs } from "./args/FindManyProblemArgs";
import { FindUniqueProblemArgs } from "./args/FindUniqueProblemArgs";
import { GroupByProblemArgs } from "./args/GroupByProblemArgs";
import { UpdateManyProblemArgs } from "./args/UpdateManyProblemArgs";
import { UpdateProblemArgs } from "./args/UpdateProblemArgs";
import { UpsertProblemArgs } from "./args/UpsertProblemArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Problem } from "../../../models/Problem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProblem } from "../../outputs/AggregateProblem";
import { ProblemGroupBy } from "../../outputs/ProblemGroupBy";

@TypeGraphQL.Resolver(_of => Problem)
export class ProblemCrudResolver {
  @TypeGraphQL.Query(_returns => Problem, {
    nullable: true
  })
  async problem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProblemArgs): Promise<Problem | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Problem, {
    nullable: true
  })
  async findFirstProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProblemArgs): Promise<Problem | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Problem], {
    nullable: false
  })
  async problems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProblemArgs): Promise<Problem[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: false
  })
  async createProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateProblemArgs): Promise<Problem> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyProblemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: true
  })
  async deleteProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteProblemArgs): Promise<Problem | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: true
  })
  async updateProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateProblemArgs): Promise<Problem | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyProblemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyProblemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: false
  })
  async upsertProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertProblemArgs): Promise<Problem> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateProblem, {
    nullable: false
  })
  async aggregateProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProblemArgs): Promise<AggregateProblem> {
    return getPrismaFromContext(ctx).problem.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProblemGroupBy], {
    nullable: false
  })
  async groupByProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProblemArgs): Promise<ProblemGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).problem.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
