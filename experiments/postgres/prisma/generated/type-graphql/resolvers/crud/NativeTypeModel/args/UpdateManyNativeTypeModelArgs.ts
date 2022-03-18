import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelUpdateManyMutationInput } from "../../../inputs/NativeTypeModelUpdateManyMutationInput";
import { NativeTypeModelWhereInput } from "../../../inputs/NativeTypeModelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNativeTypeModelArgs {
  @TypeGraphQL.Field(_type => NativeTypeModelUpdateManyMutationInput, {
    nullable: false
  })
  data!: NativeTypeModelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NativeTypeModelWhereInput, {
    nullable: true
  })
  where?: NativeTypeModelWhereInput | undefined;
}
