import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorOrderByRelationAggregateInput } from "../inputs/CreatorOrderByRelationAggregateInput";
import { CreatorOrderByWithRelationInput } from "../inputs/CreatorOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => CreatorOrderByWithRelationInput, {
    nullable: true
  })
  creator?: CreatorOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  creatorId?: "asc" | "desc" | undefined;
}
