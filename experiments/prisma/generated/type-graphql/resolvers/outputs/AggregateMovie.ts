import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { MovieMaxAggregate } from "../outputs/MovieMaxAggregate";
import { MovieMinAggregate } from "../outputs/MovieMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class AggregateMovie {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  count!: number | null;

  @TypeGraphQL.Field(_type => MovieMinAggregate, {
    nullable: true,
    description: undefined
  })
  min!: MovieMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieMaxAggregate, {
    nullable: true,
    description: undefined
  })
  max!: MovieMaxAggregate | null;
}
