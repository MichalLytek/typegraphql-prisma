import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { NestedBoolFilter } from "../inputs/NestedBoolFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedBoolWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  equals?: boolean | undefined;

  @TypeGraphQL.Field(_type => NestedBoolWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedBoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedBoolFilter, {
    nullable: true
  })
  min?: NestedBoolFilter | undefined;

  @TypeGraphQL.Field(_type => NestedBoolFilter, {
    nullable: true
  })
  max?: NestedBoolFilter | undefined;
}
