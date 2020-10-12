import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ProblemAvgAggregate } from "../outputs/ProblemAvgAggregate";
import { ProblemMaxAggregate } from "../outputs/ProblemMaxAggregate";
import { ProblemMinAggregate } from "../outputs/ProblemMinAggregate";
import { ProblemSumAggregate } from "../outputs/ProblemSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: true,
})
export class AggregateProblem {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @TypeGraphQL.Field(_type => ProblemAvgAggregate, {
    nullable: true,
    description: undefined
  })
  avg!: ProblemAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProblemSumAggregate, {
    nullable: true,
    description: undefined
  })
  sum!: ProblemSumAggregate | null;

  @TypeGraphQL.Field(_type => ProblemMinAggregate, {
    nullable: true,
    description: undefined
  })
  min!: ProblemMinAggregate | null;

  @TypeGraphQL.Field(_type => ProblemMaxAggregate, {
    nullable: true,
    description: undefined
  })
  max!: ProblemMaxAggregate | null;
}
