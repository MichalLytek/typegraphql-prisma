import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NestedFloatFilter } from "../inputs/NestedFloatFilter";
import { NestedFloatWithAggregatesFilter } from "../inputs/NestedFloatWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@TypeGraphQL.InputType("FloatWithAggregatesFilter", {
  isAbstract: true
})
export class FloatWithAggregatesFilter {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  equals?: number | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
    nullable: true
  })
  in?: number[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lt?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lte?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  gt?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  gte?: number | undefined;

  @TypeGraphQL.Field(_type => NestedFloatWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedFloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedFloatFilter, {
    nullable: true
  })
  _avg?: NestedFloatFilter | undefined;

  @TypeGraphQL.Field(_type => NestedFloatFilter, {
    nullable: true
  })
  _sum?: NestedFloatFilter | undefined;

  @TypeGraphQL.Field(_type => NestedFloatFilter, {
    nullable: true
  })
  _min?: NestedFloatFilter | undefined;

  @TypeGraphQL.Field(_type => NestedFloatFilter, {
    nullable: true
  })
  _max?: NestedFloatFilter | undefined;
}
