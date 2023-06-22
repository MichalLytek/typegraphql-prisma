import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("StringNullableListFilter", {})
export class StringNullableListFilter {
  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  equals?: string[] | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  has?: string | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  hasEvery?: string[] | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  hasSome?: string[] | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;
}
