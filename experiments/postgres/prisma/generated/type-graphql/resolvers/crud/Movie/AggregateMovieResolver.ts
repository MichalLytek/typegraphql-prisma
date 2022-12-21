import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieArgs } from "./args/AggregateMovieArgs";
import { Movie } from "../../../models/Movie";
import { AggregateMovie } from "../../outputs/AggregateMovie";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class AggregateMovieResolver {
  @TypeGraphQL.Query(_returns => AggregateMovie, {
    nullable: false
  })
  async aggregateMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieArgs): Promise<AggregateMovie> {
    return getPrismaFromContext(ctx).movie.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
