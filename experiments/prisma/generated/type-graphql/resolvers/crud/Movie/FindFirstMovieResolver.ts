import * as TypeGraphQL from "type-graphql";
import { FindFirstMovieArgs } from "./args/FindFirstMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class FindFirstMovieResolver {
  @TypeGraphQL.Query(_returns => Movie, {
    nullable: true
  })
  async findFirstMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMovieArgs): Promise<Movie | null> {
    return getPrismaFromContext(ctx).movie.findFirst(args);
  }
}
