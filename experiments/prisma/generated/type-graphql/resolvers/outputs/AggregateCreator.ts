import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CreatorAvgAggregate } from "../outputs/CreatorAvgAggregate";
import { CreatorMaxAggregate } from "../outputs/CreatorMaxAggregate";
import { CreatorMinAggregate } from "../outputs/CreatorMinAggregate";
import { CreatorSumAggregate } from "../outputs/CreatorSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class AggregateCreator {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @TypeGraphQL.Field(_type => CreatorAvgAggregate, {
    nullable: true,
    description: undefined
  })
  avg!: CreatorAvgAggregate | null;

  @TypeGraphQL.Field(_type => CreatorSumAggregate, {
    nullable: true,
    description: undefined
  })
  sum!: CreatorSumAggregate | null;

  @TypeGraphQL.Field(_type => CreatorMinAggregate, {
    nullable: true,
    description: undefined
  })
  min!: CreatorMinAggregate | null;

  @TypeGraphQL.Field(_type => CreatorMaxAggregate, {
    nullable: true,
    description: undefined
  })
  max!: CreatorMaxAggregate | null;
}
