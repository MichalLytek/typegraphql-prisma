import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCreateManyInput } from "../../../inputs/MovieCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMovieArgs {
  @TypeGraphQL.Field(_type => [MovieCreateManyInput], {
    nullable: false
  })
  data!: MovieCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
