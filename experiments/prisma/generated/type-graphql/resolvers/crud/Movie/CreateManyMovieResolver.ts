import * as TypeGraphQL from "type-graphql";
import { CreateManyMovieArgs } from "./args/CreateManyMovieArgs";
import { Movie } from "../../../models/Movie";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class CreateManyMovieResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyMovieArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.movie.createMany(args);
  }
}
