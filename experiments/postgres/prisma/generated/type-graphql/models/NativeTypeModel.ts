import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("NativeTypeModel", {})
export class NativeTypeModel {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  bigInt?: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  byteA?: Buffer | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  decimal?: Prisma.Decimal | null;
}
