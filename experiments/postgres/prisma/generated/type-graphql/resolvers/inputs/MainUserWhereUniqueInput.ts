import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("MainUserWhereUniqueInput")
export class MainUserWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => [MainUserWhereInput], {
    nullable: true
  })
  AND?: MainUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MainUserWhereInput], {
    nullable: true
  })
  OR?: MainUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MainUserWhereInput], {
    nullable: true
  })
  NOT?: MainUserWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableListFilter, {
    nullable: true
  })
  grades?: IntNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  aliases?: StringNullableListFilter | undefined;

  posts?: PostListRelationFilter | undefined;

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
