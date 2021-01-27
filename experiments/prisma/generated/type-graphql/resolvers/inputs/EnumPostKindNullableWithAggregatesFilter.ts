import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { NestedEnumPostKindNullableFilter } from "../inputs/NestedEnumPostKindNullableFilter";
import { NestedEnumPostKindNullableWithAggregatesFilter } from "../inputs/NestedEnumPostKindNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumPostKindNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true
  })
  equals?: "BLOG" | "ADVERT" | undefined;

  @TypeGraphQL.Field(_type => [PostKind], {
    nullable: true
  })
  in?: Array<"BLOG" | "ADVERT"> | undefined;

  @TypeGraphQL.Field(_type => [PostKind], {
    nullable: true
  })
  notIn?: Array<"BLOG" | "ADVERT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostKindNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumPostKindNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostKindNullableFilter, {
    nullable: true
  })
  min?: NestedEnumPostKindNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostKindNullableFilter, {
    nullable: true
  })
  max?: NestedEnumPostKindNullableFilter | undefined;
}
