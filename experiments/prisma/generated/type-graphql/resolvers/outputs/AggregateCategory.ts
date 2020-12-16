import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CategoryAvgAggregate } from "../outputs/CategoryAvgAggregate";
import { CategoryMaxAggregate } from "../outputs/CategoryMaxAggregate";
import { CategoryMinAggregate } from "../outputs/CategoryMinAggregate";
import { CategorySumAggregate } from "../outputs/CategorySumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class AggregateCategory {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  count!: number | null;

  @TypeGraphQL.Field(_type => CategoryAvgAggregate, {
    nullable: true,
    description: undefined
  })
  avg!: CategoryAvgAggregate | null;

  @TypeGraphQL.Field(_type => CategorySumAggregate, {
    nullable: true,
    description: undefined
  })
  sum!: CategorySumAggregate | null;

  @TypeGraphQL.Field(_type => CategoryMinAggregate, {
    nullable: true,
    description: undefined
  })
  min!: CategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => CategoryMaxAggregate, {
    nullable: true,
    description: undefined
  })
  max!: CategoryMaxAggregate | null;
}
