import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { MainUser } from "../models/MainUser";
import { PostKind } from "../enums/PostKind";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Post {
  /**
   * first line of comment
   * second line of comment
   * third line of comment
   */
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false,
    description: "first line of comment\nsecond line of comment\nthird line of comment"
  })
  uuid!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  subtitle?: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  author?: MainUser;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  authorId!: number;

  editor?: MainUser | null;

  editorId?: number | null;

  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true
  })
  kind?: "BLOG" | "ADVERT" | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  metadata!: Prisma.JsonValue;
}
