import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelOrderByWithRelationInput } from "../../../inputs/NativeTypeModelOrderByWithRelationInput";
import { NativeTypeModelWhereInput } from "../../../inputs/NativeTypeModelWhereInput";
import { NativeTypeModelWhereUniqueInput } from "../../../inputs/NativeTypeModelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateNativeTypeModelArgs {
  @TypeGraphQL.Field(_type => NativeTypeModelWhereInput, {
    nullable: true
  })
  where?: NativeTypeModelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NativeTypeModelOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NativeTypeModelOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NativeTypeModelWhereUniqueInput, {
    nullable: true
  })
  cursor?: NativeTypeModelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
