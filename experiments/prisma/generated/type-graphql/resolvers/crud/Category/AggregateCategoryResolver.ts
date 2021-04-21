import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryArgs } from "./args/AggregateCategoryArgs";
import { Category } from "../../../models/Category";
import { AggregateCategory } from "../../outputs/AggregateCategory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Category)
export class AggregateCategoryResolver {
  @TypeGraphQL.Query(_returns => AggregateCategory, {
    nullable: false
  })
  async aggregateCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCategoryArgs): Promise<AggregateCategory> {
    return getPrismaFromContext(ctx).category.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
