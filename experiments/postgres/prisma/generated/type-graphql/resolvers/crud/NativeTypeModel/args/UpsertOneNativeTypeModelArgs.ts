import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelCreateInput } from "../../../inputs/NativeTypeModelCreateInput";
import { NativeTypeModelUpdateInput } from "../../../inputs/NativeTypeModelUpdateInput";
import { NativeTypeModelWhereUniqueInput } from "../../../inputs/NativeTypeModelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNativeTypeModelArgs {
  @TypeGraphQL.Field(_type => NativeTypeModelWhereUniqueInput, {
    nullable: false
  })
  where!: NativeTypeModelWhereUniqueInput;

  @TypeGraphQL.Field(_type => NativeTypeModelCreateInput, {
    nullable: false
  })
  create!: NativeTypeModelCreateInput;

  @TypeGraphQL.Field(_type => NativeTypeModelUpdateInput, {
    nullable: false
  })
  update!: NativeTypeModelUpdateInput;
}
