import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorOrderByWithRelationAndSearchRelevanceInput } from "../inputs/DirectorOrderByWithRelationAndSearchRelevanceInput";
import { MovieOrderByRelevanceInput } from "../inputs/MovieOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieOrderByWithRelationAndSearchRelevanceInput", {})
export class MovieOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  directorFirstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  directorLastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DirectorOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  director?: DirectorOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MovieOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MovieOrderByRelevanceInput | undefined;
}
