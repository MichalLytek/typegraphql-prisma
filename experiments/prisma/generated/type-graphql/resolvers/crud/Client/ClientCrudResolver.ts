import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateClientArgs } from "./args/AggregateClientArgs";
import { CreateClientArgs } from "./args/CreateClientArgs";
import { CreateManyClientArgs } from "./args/CreateManyClientArgs";
import { DeleteClientArgs } from "./args/DeleteClientArgs";
import { DeleteManyClientArgs } from "./args/DeleteManyClientArgs";
import { FindFirstClientArgs } from "./args/FindFirstClientArgs";
import { FindManyClientArgs } from "./args/FindManyClientArgs";
import { FindUniqueClientArgs } from "./args/FindUniqueClientArgs";
import { GroupByClientArgs } from "./args/GroupByClientArgs";
import { UpdateClientArgs } from "./args/UpdateClientArgs";
import { UpdateManyClientArgs } from "./args/UpdateManyClientArgs";
import { UpsertClientArgs } from "./args/UpsertClientArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Client } from "../../../models/Client";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateClient } from "../../outputs/AggregateClient";
import { ClientGroupBy } from "../../outputs/ClientGroupBy";

@TypeGraphQL.Resolver(_of => Client)
export class ClientCrudResolver {
  @TypeGraphQL.Query(_returns => Client, {
    nullable: true
  })
  async client(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueClientArgs): Promise<Client | null> {
    return getPrismaFromContext(ctx).user.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Client, {
    nullable: true
  })
  async findFirstClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstClientArgs): Promise<Client | null> {
    return getPrismaFromContext(ctx).user.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Client], {
    nullable: false
  })
  async clients(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyClientArgs): Promise<Client[]> {
    return getPrismaFromContext(ctx).user.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Client, {
    nullable: false
  })
  async createClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateClientArgs): Promise<Client> {
    return getPrismaFromContext(ctx).user.create(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyClientArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).user.createMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Client, {
    nullable: true
  })
  async deleteClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteClientArgs): Promise<Client | null> {
    return getPrismaFromContext(ctx).user.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Client, {
    nullable: true
  })
  async updateClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateClientArgs): Promise<Client | null> {
    return getPrismaFromContext(ctx).user.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyClientArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).user.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyClientArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).user.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Client, {
    nullable: false
  })
  async upsertClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertClientArgs): Promise<Client> {
    return getPrismaFromContext(ctx).user.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateClient, {
    nullable: false
  })
  async aggregateClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateClientArgs): Promise<AggregateClient> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ClientGroupBy], {
    nullable: false
  })
  async groupByClient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByClientArgs): Promise<ClientGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).user.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
