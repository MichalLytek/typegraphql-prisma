import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovieArgs } from "./args/DeleteOneMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class DeleteOneMovieResolver {
  @TypeGraphQL.Mutation(_returns => Movie, {
    nullable: true
  })
  async deleteOneMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_returns => DeleteOneMovieArgs) args: DeleteOneMovieArgs): Promise<Movie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
