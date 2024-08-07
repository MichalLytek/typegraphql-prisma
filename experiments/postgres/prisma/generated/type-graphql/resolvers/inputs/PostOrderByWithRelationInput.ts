import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserOrderByWithRelationInput } from "../inputs/MainUserOrderByWithRelationInput";
import { PostOrderByRelevanceInput } from "../inputs/PostOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostOrderByWithRelationInput", {})
export class PostOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => MainUserOrderByWithRelationInput, {
    nullable: true
  })
  author?: MainUserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MainUserOrderByWithRelationInput, {
    nullable: true
  })
  editor?: MainUserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: PostOrderByRelevanceInput | undefined;
}
