import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorOrderByRelevanceInput } from "../inputs/DirectorOrderByRelevanceInput";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DirectorOrderByWithRelationInput", {})
export class DirectorOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MovieOrderByRelationAggregateInput, {
    nullable: true
  })
  movies?: MovieOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DirectorOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: DirectorOrderByRelevanceInput | undefined;
}
