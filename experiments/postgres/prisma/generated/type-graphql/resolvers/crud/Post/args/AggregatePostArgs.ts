import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostOrderByWithRelationInput } from "../../../inputs/PostOrderByWithRelationInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePostArgs {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
