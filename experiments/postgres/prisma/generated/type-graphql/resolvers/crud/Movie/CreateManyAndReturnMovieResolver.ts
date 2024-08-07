import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMovieArgs } from "./args/CreateManyAndReturnMovieArgs";
import { Movie } from "../../../models/Movie";
import { CreateManyAndReturnMovie } from "../../outputs/CreateManyAndReturnMovie";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class CreateManyAndReturnMovieResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMovie], {
    nullable: false
  })
  async createManyAndReturnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnMovieArgs) args: CreateManyAndReturnMovieArgs): Promise<CreateManyAndReturnMovie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
