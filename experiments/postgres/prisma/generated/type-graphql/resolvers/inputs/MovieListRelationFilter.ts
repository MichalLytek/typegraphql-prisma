import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType("MovieListRelationFilter", {})
export class MovieListRelationFilter {
  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  every?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  some?: MovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereInput, {
    nullable: true
  })
  none?: MovieWhereInput | undefined;
}
