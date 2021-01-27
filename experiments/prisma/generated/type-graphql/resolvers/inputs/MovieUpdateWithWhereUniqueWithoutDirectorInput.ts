import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieUncheckedUpdateWithoutDirectorInput } from "../inputs/MovieUncheckedUpdateWithoutDirectorInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateWithWhereUniqueWithoutDirectorInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUncheckedUpdateWithoutDirectorInput, {
    nullable: false
  })
  data!: MovieUncheckedUpdateWithoutDirectorInput;
}
