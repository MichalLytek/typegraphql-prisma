import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("IntNullableListFilter", {
  isAbstract: true
})
export class IntNullableListFilter {
  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  equals?: number[] | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  has?: number | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  hasEvery?: number[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  hasSome?: number[] | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;
}
