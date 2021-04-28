import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorAvgAggregate } from "../outputs/CreatorAvgAggregate";
import { CreatorCountAggregate } from "../outputs/CreatorCountAggregate";
import { CreatorMaxAggregate } from "../outputs/CreatorMaxAggregate";
import { CreatorMinAggregate } from "../outputs/CreatorMinAggregate";
import { CreatorSumAggregate } from "../outputs/CreatorSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CreatorGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => CreatorCountAggregate, {
    nullable: true
  })
  count!: CreatorCountAggregate | null;

  @TypeGraphQL.Field(_type => CreatorAvgAggregate, {
    nullable: true
  })
  avg!: CreatorAvgAggregate | null;

  @TypeGraphQL.Field(_type => CreatorSumAggregate, {
    nullable: true
  })
  sum!: CreatorSumAggregate | null;

  @TypeGraphQL.Field(_type => CreatorMinAggregate, {
    nullable: true
  })
  min!: CreatorMinAggregate | null;

  @TypeGraphQL.Field(_type => CreatorMaxAggregate, {
    nullable: true
  })
  max!: CreatorMaxAggregate | null;
}
