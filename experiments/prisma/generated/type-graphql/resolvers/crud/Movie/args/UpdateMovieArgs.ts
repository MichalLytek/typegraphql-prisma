import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieUncheckedUpdateInput } from "../../../inputs/MovieUncheckedUpdateInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMovieArgs {
  @TypeGraphQL.Field(_type => MovieUncheckedUpdateInput, {
    nullable: false
  })
  data!: MovieUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;
}
