import * as TypeGraphQL from "type-graphql";
import { CreateMovieArgs } from "./args/CreateMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class CreateMovieResolver {
  @TypeGraphQL.Mutation(_returns => Movie, {
    nullable: false
  })
  async createMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMovieArgs): Promise<Movie> {
    return getPrismaFromContext(ctx).movie.create(args);
  }
}
