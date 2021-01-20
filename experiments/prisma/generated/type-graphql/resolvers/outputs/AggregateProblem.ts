import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemAvgAggregate } from "../outputs/ProblemAvgAggregate";
import { ProblemCountAggregate } from "../outputs/ProblemCountAggregate";
import { ProblemMaxAggregate } from "../outputs/ProblemMaxAggregate";
import { ProblemMinAggregate } from "../outputs/ProblemMinAggregate";
import { ProblemSumAggregate } from "../outputs/ProblemSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateProblem {
  @TypeGraphQL.Field(_type => ProblemCountAggregate, {
    nullable: true
  })
  count!: ProblemCountAggregate | null;

  @TypeGraphQL.Field(_type => ProblemAvgAggregate, {
    nullable: true
  })
  avg!: ProblemAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProblemSumAggregate, {
    nullable: true
  })
  sum!: ProblemSumAggregate | null;

  @TypeGraphQL.Field(_type => ProblemMinAggregate, {
    nullable: true
  })
  min!: ProblemMinAggregate | null;

  @TypeGraphQL.Field(_type => ProblemMaxAggregate, {
    nullable: true
  })
  max!: ProblemMaxAggregate | null;
}
