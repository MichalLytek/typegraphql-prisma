import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenOrderByWithRelationInput } from "../../../inputs/HiddenOrderByWithRelationInput";
import { HiddenWhereInput } from "../../../inputs/HiddenWhereInput";
import { HiddenWhereUniqueInput } from "../../../inputs/HiddenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateHiddenArgs {
  @TypeGraphQL.Field(_type => HiddenWhereInput, {
    nullable: true
  })
  where?: HiddenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HiddenOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: HiddenOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => HiddenWhereUniqueInput, {
    nullable: true
  })
  cursor?: HiddenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
