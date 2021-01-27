import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieUncheckedCreateInput } from "../../../inputs/MovieUncheckedCreateInput";
import { MovieUncheckedUpdateInput } from "../../../inputs/MovieUncheckedUpdateInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMovieArgs {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUncheckedCreateInput, {
    nullable: false
  })
  create!: MovieUncheckedCreateInput;

  @TypeGraphQL.Field(_type => MovieUncheckedUpdateInput, {
    nullable: false
  })
  update!: MovieUncheckedUpdateInput;
}
