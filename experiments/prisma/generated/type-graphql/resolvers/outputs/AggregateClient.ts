import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientAvgAggregate } from "../outputs/ClientAvgAggregate";
import { ClientCountAggregate } from "../outputs/ClientCountAggregate";
import { ClientMaxAggregate } from "../outputs/ClientMaxAggregate";
import { ClientMinAggregate } from "../outputs/ClientMinAggregate";
import { ClientSumAggregate } from "../outputs/ClientSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateClient {
  @TypeGraphQL.Field(_type => ClientCountAggregate, {
    nullable: true
  })
  count!: ClientCountAggregate | null;

  @TypeGraphQL.Field(_type => ClientAvgAggregate, {
    nullable: true
  })
  avg!: ClientAvgAggregate | null;

  @TypeGraphQL.Field(_type => ClientSumAggregate, {
    nullable: true
  })
  sum!: ClientSumAggregate | null;

  @TypeGraphQL.Field(_type => ClientMinAggregate, {
    nullable: true
  })
  min!: ClientMinAggregate | null;

  @TypeGraphQL.Field(_type => ClientMaxAggregate, {
    nullable: true
  })
  max!: ClientMaxAggregate | null;
}
