import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { NativeTypeModelWhereInput } from "../inputs/NativeTypeModelWhereInput";

@TypeGraphQL.InputType("NativeTypeModelWhereUniqueInput", {
  isAbstract: true
})
export class NativeTypeModelWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelWhereInput], {
    nullable: true
  })
  AND?: NativeTypeModelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelWhereInput], {
    nullable: true
  })
  OR?: NativeTypeModelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelWhereInput], {
    nullable: true
  })
  NOT?: NativeTypeModelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  bigInt?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  byteA?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  decimal?: DecimalNullableFilter | undefined;
}
