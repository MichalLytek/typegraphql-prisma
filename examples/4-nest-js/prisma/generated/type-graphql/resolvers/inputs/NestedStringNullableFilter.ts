import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("NestedStringNullableFilter", {
  isAbstract: true
})
export class NestedStringNullableFilter {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  equals?: string | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  in?: string[] | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  notIn?: string[] | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lt?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lte?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gt?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gte?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contains?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  startsWith?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  endsWith?: string | undefined;

  @TypeGraphQL.Field(_type => NestedStringNullableFilter, {
    nullable: true
  })
  not?: NestedStringNullableFilter | undefined;
}
