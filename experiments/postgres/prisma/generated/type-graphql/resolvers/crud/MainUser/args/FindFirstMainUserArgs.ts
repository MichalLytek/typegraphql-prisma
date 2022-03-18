import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MainUserOrderByWithRelationAndSearchRelevanceInput";
import { MainUserWhereInput } from "../../../inputs/MainUserWhereInput";
import { MainUserWhereUniqueInput } from "../../../inputs/MainUserWhereUniqueInput";
import { MainUserScalarFieldEnum } from "../../../../enums/MainUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMainUserArgs {
  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MainUserOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MainUserOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: MainUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MainUserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "name" | "age" | "balance" | "amount" | "role" | "grades" | "aliases"> | undefined;
}
