import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MovieMovieCompoundIdCompoundUniqueInput } from "../inputs/MovieMovieCompoundIdCompoundUniqueInput";

@TypeGraphQL.InputType("MovieWhereUniqueInput", {
  isAbstract: true
})
export class MovieWhereUniqueInput {
  @TypeGraphQL.Field(_type => MovieMovieCompoundIdCompoundUniqueInput, {
    nullable: true
  })
  movieCompoundId?: MovieMovieCompoundIdCompoundUniqueInput | undefined;
}
