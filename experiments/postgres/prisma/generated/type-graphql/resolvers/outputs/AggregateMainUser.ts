import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserAvgAggregate } from "../outputs/MainUserAvgAggregate";
import { MainUserCountAggregate } from "../outputs/MainUserCountAggregate";
import { MainUserMaxAggregate } from "../outputs/MainUserMaxAggregate";
import { MainUserMinAggregate } from "../outputs/MainUserMinAggregate";
import { MainUserSumAggregate } from "../outputs/MainUserSumAggregate";

@TypeGraphQL.ObjectType("AggregateMainUser", {})
export class AggregateMainUser {
  @TypeGraphQL.Field(_type => MainUserCountAggregate, {
    nullable: true
  })
  _count!: MainUserCountAggregate | null;

  @TypeGraphQL.Field(_type => MainUserAvgAggregate, {
    nullable: true
  })
  _avg!: MainUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => MainUserSumAggregate, {
    nullable: true
  })
  _sum!: MainUserSumAggregate | null;

  @TypeGraphQL.Field(_type => MainUserMinAggregate, {
    nullable: true
  })
  _min!: MainUserMinAggregate | null;

  @TypeGraphQL.Field(_type => MainUserMaxAggregate, {
    nullable: true
  })
  _max!: MainUserMaxAggregate | null;
}
