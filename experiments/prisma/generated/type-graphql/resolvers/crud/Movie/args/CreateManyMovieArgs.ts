import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieCreateManyInput } from "../../../inputs/MovieCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieArgs {
  @TypeGraphQL.Field(_type => [MovieCreateManyInput], {
    nullable: false
  })
  data!: MovieCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
