import * as TypeGraphQL from "type-graphql";
import { Director } from "../../../models/Director";
import { Movie } from "../../../models/Movie";
import { DirectorMoviesArgs } from "./args/DirectorMoviesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Director)
export class DirectorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() director: Director, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args(_returns => DirectorMoviesArgs) args: DirectorMoviesArgs): Promise<Movie[]> {
    return getPrismaFromContext(ctx).director.findUnique({
      where: {
        firstName_lastName: {
          firstName: director.firstName,
          lastName: director.lastName,
        },
      },
    }).movies(args);
  }
}
