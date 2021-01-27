import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedDateTimeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  equals?: Date | undefined;

  @TypeGraphQL.Field(_type => [Date], {
    nullable: true
  })
  in?: Date[] | undefined;

  @TypeGraphQL.Field(_type => [Date], {
    nullable: true
  })
  notIn?: Date[] | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lte?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  gt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  gte?: Date | undefined;

  @TypeGraphQL.Field(_type => NestedDateTimeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedDateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedDateTimeFilter, {
    nullable: true
  })
  min?: NestedDateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedDateTimeFilter, {
    nullable: true
  })
  max?: NestedDateTimeFilter | undefined;
}
