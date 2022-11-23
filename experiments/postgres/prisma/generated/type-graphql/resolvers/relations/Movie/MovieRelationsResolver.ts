import * as TypeGraphQL from "type-graphql";
import { Director } from "../../../models/Director";
import { Movie } from "../../../models/Movie";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class MovieRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Director, {
    nullable: false
  })
  async director(@TypeGraphQL.Root() movie: Movie, @TypeGraphQL.Ctx() ctx: any): Promise<Director> {
    return getPrismaFromContext(ctx).movie.findUnique({
      where: {
        movieCompoundId: {
          directorFirstName: movie.directorFirstName,
          directorLastName: movie.directorLastName,
          title: movie.title,
        },
      },
    }).director({});
  }
}
