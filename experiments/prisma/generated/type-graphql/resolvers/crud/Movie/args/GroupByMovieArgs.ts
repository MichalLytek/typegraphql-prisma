import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MovieOrderByInput } from "../../../inputs/MovieOrderByInput";
import { MovieScalarWhereWithAggregatesInput } from "../../../inputs/MovieScalarWhereWithAggregatesInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { MovieScalarFieldEnum } from "../../../../enums/MovieScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieArgs {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieOrderByInput], {
    nullable: true
  })
  orderBy?: MovieOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"directorFirstName" | "directorLastName" | "title">;

  @TypeGraphQL.Field(_type => MovieScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
