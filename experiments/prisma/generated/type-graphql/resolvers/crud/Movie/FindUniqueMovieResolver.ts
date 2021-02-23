import * as TypeGraphQL from "type-graphql";
import { FindUniqueMovieArgs } from "./args/FindUniqueMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class FindUniqueMovieResolver {
  @TypeGraphQL.Query(_returns => Movie, {
    nullable: true
  })
  async movie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueMovieArgs): Promise<Movie | null> {
    return getPrismaFromContext(ctx).movie.findUnique(args);
  }
}
