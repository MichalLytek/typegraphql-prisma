import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUncheckedUpdateManyWithoutMoviesInput } from "../inputs/MovieUncheckedUpdateManyWithoutMoviesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateManyWithWhereWithoutDirectorInput {
  @TypeGraphQL.Field(_type => MovieScalarWhereInput, {
    nullable: false
  })
  where!: MovieScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieUncheckedUpdateManyWithoutMoviesInput, {
    nullable: false
  })
  data!: MovieUncheckedUpdateManyWithoutMoviesInput;
}
