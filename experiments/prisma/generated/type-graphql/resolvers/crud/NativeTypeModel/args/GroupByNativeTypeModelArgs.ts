import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelOrderByInput } from "../../../inputs/NativeTypeModelOrderByInput";
import { NativeTypeModelScalarWhereWithAggregatesInput } from "../../../inputs/NativeTypeModelScalarWhereWithAggregatesInput";
import { NativeTypeModelWhereInput } from "../../../inputs/NativeTypeModelWhereInput";
import { NativeTypeModelScalarFieldEnum } from "../../../../enums/NativeTypeModelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNativeTypeModelArgs {
  @TypeGraphQL.Field(_type => NativeTypeModelWhereInput, {
    nullable: true
  })
  where?: NativeTypeModelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelOrderByInput], {
    nullable: true
  })
  orderBy?: NativeTypeModelOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "bigInt" | "byteA" | "decimal">;

  @TypeGraphQL.Field(_type => NativeTypeModelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NativeTypeModelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
