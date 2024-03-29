import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CreatorOrderByWithRelationAndSearchRelevanceInput";
import { CreatorWhereInput } from "../../../inputs/CreatorWhereInput";
import { CreatorWhereUniqueInput } from "../../../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CreatorOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CreatorOrderByWithRelationAndSearchRelevanceInput[] | undefined;

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
}
