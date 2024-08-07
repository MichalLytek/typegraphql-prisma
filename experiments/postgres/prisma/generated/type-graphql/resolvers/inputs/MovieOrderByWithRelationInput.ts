import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorOrderByWithRelationInput } from "../inputs/DirectorOrderByWithRelationInput";
import { MovieOrderByRelevanceInput } from "../inputs/MovieOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieOrderByWithRelationInput", {})
export class MovieOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => DirectorOrderByWithRelationInput, {
    nullable: true
  })
  director?: DirectorOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MovieOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MovieOrderByRelevanceInput | undefined;
}
