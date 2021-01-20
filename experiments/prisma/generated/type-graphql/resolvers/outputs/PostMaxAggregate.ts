import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PostMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  published!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtitle!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  authorId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  editorId!: number | null;

  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true
  })
  kind!: "BLOG" | "ADVERT" | null;

  @TypeGraphQL.Field(_type => GraphQLJSON, {
    nullable: true
  })
  metadata!: Prisma.JsonValue | null;
}
