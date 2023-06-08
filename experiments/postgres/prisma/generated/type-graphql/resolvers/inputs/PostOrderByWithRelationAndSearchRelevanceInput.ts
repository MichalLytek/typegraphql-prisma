import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MainUserOrderByWithRelationAndSearchRelevanceInput";
import { PostOrderByRelevanceInput } from "../inputs/PostOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostOrderByWithRelationAndSearchRelevanceInput")
export class PostOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  uuid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  subtitle?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  content?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  editorId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  kind?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  metadata?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MainUserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  author?: MainUserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MainUserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  editor?: MainUserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: PostOrderByRelevanceInput | undefined;
}
