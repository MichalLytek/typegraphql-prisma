import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorOrderByRelationAggregateInput } from "../inputs/CreatorOrderByRelationAggregateInput";
import { CreatorOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CreatorOrderByWithRelationAndSearchRelevanceInput";
import { ProblemOrderByRelevanceInput } from "../inputs/ProblemOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  problemText?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CreatorOrderByRelationAggregateInput, {
    nullable: true
  })
  likedBy?: CreatorOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CreatorOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  creator?: CreatorOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  creatorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProblemOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: ProblemOrderByRelevanceInput | undefined;
}
