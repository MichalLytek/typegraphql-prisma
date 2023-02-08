import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/HiddenOrderByWithRelationAndSearchRelevanceInput";
import { HiddenWhereInput } from "../../../inputs/HiddenWhereInput";
import { HiddenWhereUniqueInput } from "../../../inputs/HiddenWhereUniqueInput";
import { HiddenScalarFieldEnum } from "../../../../enums/HiddenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstHiddenOrThrowArgs {
  @TypeGraphQL.Field(_type => HiddenWhereInput, {
    nullable: true
  })
  where?: HiddenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [HiddenOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: HiddenOrderByWithRelationAndSearchRelevanceInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [HiddenScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
