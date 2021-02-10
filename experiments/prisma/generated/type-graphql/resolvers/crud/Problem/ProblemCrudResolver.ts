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
import { Problem } from "../../../models/Problem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProblem } from "../../outputs/AggregateProblem";
import { ProblemGroupBy } from "../../outputs/ProblemGroupBy";

@TypeGraphQL.Resolver(_of => Problem)
export class ProblemCrudResolver {
  @TypeGraphQL.Query(_returns => Problem, {
    nullable: true
  })
  async problem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueProblemArgs): Promise<Problem | null> {
    return ctx.prisma.problem.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Problem, {
    nullable: true
  })
  async findFirstProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstProblemArgs): Promise<Problem | null> {
    return ctx.prisma.problem.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Problem], {
    nullable: false
  })
  async problems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProblemArgs): Promise<Problem[]> {
    return ctx.prisma.problem.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: false
  })
  async createProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProblemArgs): Promise<Problem> {
    return ctx.prisma.problem.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyProblemArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.problem.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: true
  })
  async deleteProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProblemArgs): Promise<Problem | null> {
    return ctx.prisma.problem.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: true
  })
  async updateProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProblemArgs): Promise<Problem | null> {
    return ctx.prisma.problem.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProblemArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.problem.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProblemArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.problem.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Problem, {
    nullable: false
  })
  async upsertProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertProblemArgs): Promise<Problem> {
    return ctx.prisma.problem.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateProblem, {
    nullable: false
  })
  async aggregateProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProblemArgs): Promise<AggregateProblem> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          // remove __typename and others
          .filter(([key, value]) => !key.startsWith("__"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.problem.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProblemGroupBy], {
    nullable: false
  })
  async groupByProblem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProblemArgs): Promise<ProblemGroupBy[]> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          // remove __typename and others
          .filter(([key, value]) => !key.startsWith("__"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return ctx.prisma.problem.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
