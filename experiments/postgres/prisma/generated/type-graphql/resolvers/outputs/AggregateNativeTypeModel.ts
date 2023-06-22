import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NativeTypeModelAvgAggregate } from "../outputs/NativeTypeModelAvgAggregate";
import { NativeTypeModelCountAggregate } from "../outputs/NativeTypeModelCountAggregate";
import { NativeTypeModelMaxAggregate } from "../outputs/NativeTypeModelMaxAggregate";
import { NativeTypeModelMinAggregate } from "../outputs/NativeTypeModelMinAggregate";
import { NativeTypeModelSumAggregate } from "../outputs/NativeTypeModelSumAggregate";

@TypeGraphQL.ObjectType("AggregateNativeTypeModel", {})
export class AggregateNativeTypeModel {
  @TypeGraphQL.Field(_type => NativeTypeModelCountAggregate, {
    nullable: true
  })
  _count!: NativeTypeModelCountAggregate | null;

  @TypeGraphQL.Field(_type => NativeTypeModelAvgAggregate, {
    nullable: true
  })
  _avg!: NativeTypeModelAvgAggregate | null;

  @TypeGraphQL.Field(_type => NativeTypeModelSumAggregate, {
    nullable: true
  })
  _sum!: NativeTypeModelSumAggregate | null;

  @TypeGraphQL.Field(_type => NativeTypeModelMinAggregate, {
    nullable: true
  })
  _min!: NativeTypeModelMinAggregate | null;

  @TypeGraphQL.Field(_type => NativeTypeModelMaxAggregate, {
    nullable: true
  })
  _max!: NativeTypeModelMaxAggregate | null;
}
