import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorOrderByWithRelationInput } from "../../../inputs/CreatorOrderByWithRelationInput";
import { CreatorWhereInput } from "../../../inputs/CreatorWhereInput";
import { CreatorWhereUniqueInput } from "../../../inputs/CreatorWhereUniqueInput";
import { CreatorScalarFieldEnum } from "../../../../enums/CreatorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ProblemLikedByArgs {
  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CreatorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CreatorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: true
  })
  cursor?: CreatorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CreatorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
