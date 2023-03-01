import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorRelationFilter } from "../inputs/DirectorRelationFilter";
import { MovieMovieCompoundIdCompoundUniqueInput } from "../inputs/MovieMovieCompoundIdCompoundUniqueInput";
import { MovieWhereInput } from "../inputs/MovieWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MovieWhereUniqueInput", {
  isAbstract: true
})
export class MovieWhereUniqueInput {
  @TypeGraphQL.Field(_type => MovieMovieCompoundIdCompoundUniqueInput, {
    nullable: true
  })
  movieCompoundId?: MovieMovieCompoundIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  AND?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  OR?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereInput], {
    nullable: true
  })
  NOT?: MovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  directorFirstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  directorLastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DirectorRelationFilter, {
    nullable: true
  })
  director?: DirectorRelationFilter | undefined;
}
