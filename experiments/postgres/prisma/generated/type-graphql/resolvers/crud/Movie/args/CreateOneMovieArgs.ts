import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCreateInput } from "../../../inputs/MovieCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieArgs {
  @TypeGraphQL.Field(_type => MovieCreateInput, {
    nullable: false
  })
  data!: MovieCreateInput;
}
