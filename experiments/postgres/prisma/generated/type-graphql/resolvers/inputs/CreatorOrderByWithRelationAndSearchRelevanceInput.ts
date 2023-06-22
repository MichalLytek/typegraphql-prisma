import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorOrderByRelevanceInput } from "../inputs/CreatorOrderByRelevanceInput";
import { ProblemOrderByRelationAggregateInput } from "../inputs/ProblemOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CreatorOrderByWithRelationAndSearchRelevanceInput", {})
export class CreatorOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProblemOrderByRelationAggregateInput, {
    nullable: true
  })
  likes?: ProblemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProblemOrderByRelationAggregateInput, {
    nullable: true
  })
  problems?: ProblemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreatorOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: CreatorOrderByRelevanceInput | undefined;
}
