import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelCreateManyInput } from "../../../inputs/NativeTypeModelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnNativeTypeModelArgs {
  @TypeGraphQL.Field(_type => [NativeTypeModelCreateManyInput], {
    nullable: false
  })
  data!: NativeTypeModelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
