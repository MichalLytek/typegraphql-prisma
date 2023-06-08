import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("NestedDecimalNullableFilter")
export class NestedDecimalNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedDecimalNullableFilter, {
    nullable: true
  })
  not?: NestedDecimalNullableFilter | undefined;
}
