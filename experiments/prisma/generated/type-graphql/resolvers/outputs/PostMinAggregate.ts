import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class PostMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  uuid!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  published!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  subtitle!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  authorId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  editorId!: number | null;

  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  kind!: "BLOG" | "ADVERT" | null;

  @TypeGraphQL.Field(_type => GraphQLJSON, {
    nullable: true,
    description: undefined
  })
  metadata!: JsonValue | null;
}
