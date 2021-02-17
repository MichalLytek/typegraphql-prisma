import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NativeTypeModelAvgAggregate } from "../outputs/NativeTypeModelAvgAggregate";
import { NativeTypeModelCountAggregate } from "../outputs/NativeTypeModelCountAggregate";
import { NativeTypeModelMaxAggregate } from "../outputs/NativeTypeModelMaxAggregate";
import { NativeTypeModelMinAggregate } from "../outputs/NativeTypeModelMinAggregate";
import { NativeTypeModelSumAggregate } from "../outputs/NativeTypeModelSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class NativeTypeModelGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  bigInt?: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  byteA?: Buffer | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  decimal?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => NativeTypeModelCountAggregate, {
    nullable: true
  })
  count?: NativeTypeModelCountAggregate | null;

  @TypeGraphQL.Field(_type => NativeTypeModelAvgAggregate, {
    nullable: true
  })
  avg?: NativeTypeModelAvgAggregate | null;

  @TypeGraphQL.Field(_type => NativeTypeModelSumAggregate, {
    nullable: true
  })
  sum?: NativeTypeModelSumAggregate | null;

  @TypeGraphQL.Field(_type => NativeTypeModelMinAggregate, {
    nullable: true
  })
  min?: NativeTypeModelMinAggregate | null;

  @TypeGraphQL.Field(_type => NativeTypeModelMaxAggregate, {
    nullable: true
  })
  max?: NativeTypeModelMaxAggregate | null;
}
