import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { DirectorMaxAggregate } from "../outputs/DirectorMaxAggregate";
import { DirectorMinAggregate } from "../outputs/DirectorMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class AggregateDirector {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  count!: number | null;

  @TypeGraphQL.Field(_type => DirectorMinAggregate, {
    nullable: true,
    description: undefined
  })
  min!: DirectorMinAggregate | null;

  @TypeGraphQL.Field(_type => DirectorMaxAggregate, {
    nullable: true,
    description: undefined
  })
  max!: DirectorMaxAggregate | null;
}
