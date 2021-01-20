import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
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
