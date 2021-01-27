import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieUncheckedCreateInput } from "../../../inputs/MovieUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMovieArgs {
  @TypeGraphQL.Field(_type => MovieUncheckedCreateInput, {
    nullable: false
  })
  data!: MovieUncheckedCreateInput;
}
