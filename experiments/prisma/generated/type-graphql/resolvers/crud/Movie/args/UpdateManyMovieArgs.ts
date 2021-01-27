import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieUncheckedUpdateManyInput } from "../../../inputs/MovieUncheckedUpdateManyInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieArgs {
  @TypeGraphQL.Field(_type => MovieUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: MovieUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;
}
