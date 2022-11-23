import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorCountMoviesArgs } from "./args/DirectorCountMoviesArgs";

@TypeGraphQL.ObjectType("DirectorCount", {
  isAbstract: true
})
export class DirectorCount {
  movies!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "movies",
    nullable: false
  })
  getMovies(@TypeGraphQL.Root() root: DirectorCount, @TypeGraphQL.Args() args: DirectorCountMoviesArgs): number {
    return root.movies;
  }
}
