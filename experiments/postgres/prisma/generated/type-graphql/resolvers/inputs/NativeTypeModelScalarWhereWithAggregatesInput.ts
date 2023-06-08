import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntNullableWithAggregatesFilter } from "../inputs/BigIntNullableWithAggregatesFilter";
import { BytesNullableWithAggregatesFilter } from "../inputs/BytesNullableWithAggregatesFilter";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("NativeTypeModelScalarWhereWithAggregatesInput")
export class NativeTypeModelScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [NativeTypeModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: NativeTypeModelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: NativeTypeModelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: NativeTypeModelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableWithAggregatesFilter, {
    nullable: true
  })
  bigInt?: BigIntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableWithAggregatesFilter, {
    nullable: true
  })
  byteA?: BytesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter, {
    nullable: true
  })
  decimal?: DecimalNullableWithAggregatesFilter | undefined;
}
