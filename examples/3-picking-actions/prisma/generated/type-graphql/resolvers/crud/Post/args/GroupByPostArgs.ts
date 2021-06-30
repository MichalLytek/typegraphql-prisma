import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostOrderByInput } from "../../../inputs/PostOrderByInput";
import { PostScalarWhereWithAggregatesInput } from "../../../inputs/PostScalarWhereWithAggregatesInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostScalarFieldEnum } from "../../../../enums/PostScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostArgs {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostOrderByInput], {
    nullable: true
  })
  orderBy?: PostOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "published" | "title" | "content" | "authorId">;

  @TypeGraphQL.Field(_type => PostScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
