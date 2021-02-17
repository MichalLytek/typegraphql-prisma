import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorCountAggregate } from "../outputs/DirectorCountAggregate";
import { DirectorMaxAggregate } from "../outputs/DirectorMaxAggregate";
import { DirectorMinAggregate } from "../outputs/DirectorMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateDirector {
  @TypeGraphQL.Field(_type => DirectorCountAggregate, {
    nullable: true
  })
  count!: DirectorCountAggregate | null;

  @TypeGraphQL.Field(_type => DirectorMinAggregate, {
    nullable: true
  })
  min!: DirectorMinAggregate | null;

  @TypeGraphQL.Field(_type => DirectorMaxAggregate, {
    nullable: true
  })
  max!: DirectorMaxAggregate | null;
}
