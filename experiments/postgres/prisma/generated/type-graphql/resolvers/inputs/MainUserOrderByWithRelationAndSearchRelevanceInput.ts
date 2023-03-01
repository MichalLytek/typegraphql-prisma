import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserOrderByRelevanceInput } from "../inputs/MainUserOrderByRelevanceInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MainUserOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class MainUserOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  age?: "asc" | "desc" | undefined;

  balance?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  grades?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  aliases?: "asc" | "desc" | undefined;

  posts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput, {
    nullable: true
  })
  editorPosts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MainUserOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MainUserOrderByRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: SortOrderInput | undefined) {
    this.name = name;
  }

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: "asc" | "desc" | undefined) {
    this.balance = balance;
  }

  @TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput, {
    nullable: true
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostOrderByRelationAggregateInput | undefined) {
    this.posts = posts;
  }
}
