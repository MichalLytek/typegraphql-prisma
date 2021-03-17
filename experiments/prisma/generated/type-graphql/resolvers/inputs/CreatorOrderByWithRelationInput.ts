import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemOrderByAggregateInput } from "../inputs/ProblemOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProblemOrderByAggregateInput, {
    nullable: true
  })
  likes?: ProblemOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProblemOrderByAggregateInput, {
    nullable: true
  })
  problems?: ProblemOrderByAggregateInput | undefined;
}
