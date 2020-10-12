import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientAvgAggregate } from "../outputs/ClientAvgAggregate";
import { ClientMaxAggregate } from "../outputs/ClientMaxAggregate";
import { ClientMinAggregate } from "../outputs/ClientMinAggregate";
import { ClientSumAggregate } from "../outputs/ClientSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: true,
})
export class AggregateClient {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @TypeGraphQL.Field(_type => ClientAvgAggregate, {
    nullable: true,
    description: undefined
  })
  avg!: ClientAvgAggregate | null;

  @TypeGraphQL.Field(_type => ClientSumAggregate, {
    nullable: true,
    description: undefined
  })
  sum!: ClientSumAggregate | null;

  @TypeGraphQL.Field(_type => ClientMinAggregate, {
    nullable: true,
    description: undefined
  })
  min!: ClientMinAggregate | null;

  @TypeGraphQL.Field(_type => ClientMaxAggregate, {
    nullable: true,
    description: undefined
  })
  max!: ClientMaxAggregate | null;
}
