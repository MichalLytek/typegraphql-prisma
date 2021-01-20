import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientWhereInput {
  @TypeGraphQL.Field(_type => [ClientWhereInput], {
    nullable: true
  })
  AND?: ClientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientWhereInput], {
    nullable: true
  })
  OR?: ClientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientWhereInput], {
    nullable: true
  })
  NOT?: ClientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  age?: IntFilter | undefined;

  balance?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  amount?: FloatFilter | undefined;

  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  editorPosts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: StringNullableFilter | undefined) {
    this.name = name;
  }

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: FloatFilter | undefined) {
    this.balance = balance;
  }

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostListRelationFilter | undefined) {
    this.posts = posts;
  }
}
