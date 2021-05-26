import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NestedDecimalNullableFilter } from "../inputs/NestedDecimalNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedDecimalNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  equals?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => [DecimalJSScalar], {
    nullable: true
  })
  in?: Prisma.Decimal[] | undefined;

  @TypeGraphQL.Field(_type => [DecimalJSScalar], {
    nullable: true
  })
  notIn?: Prisma.Decimal[] | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  lt?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  lte?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  gt?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  gte?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => NestedDecimalNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedDecimalNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedDecimalNullableFilter, {
    nullable: true
  })
  _avg?: NestedDecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedDecimalNullableFilter, {
    nullable: true
  })
  _sum?: NestedDecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedDecimalNullableFilter, {
    nullable: true
  })
  _min?: NestedDecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedDecimalNullableFilter, {
    nullable: true
  })
  _max?: NestedDecimalNullableFilter | undefined;
}
