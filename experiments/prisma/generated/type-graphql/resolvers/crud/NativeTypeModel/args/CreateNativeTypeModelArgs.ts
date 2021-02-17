import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelCreateInput } from "../../../inputs/NativeTypeModelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateNativeTypeModelArgs {
  @TypeGraphQL.Field(_type => NativeTypeModelCreateInput, {
    nullable: false
  })
  data!: NativeTypeModelCreateInput;
}
