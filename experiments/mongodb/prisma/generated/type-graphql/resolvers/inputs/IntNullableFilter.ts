import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@TypeGraphQL.InputType("IntNullableFilter")
export class IntNullableFilter {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  equals?: number | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  in?: number[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lt?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  lte?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gt?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gte?: number | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  not?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
