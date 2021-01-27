import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUncheckedCreateWithoutEditorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subtitle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  authorId!: number;

  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true
  })
  kind?: "BLOG" | "ADVERT" | undefined;

  @TypeGraphQL.Field(_type => GraphQLJSON, {
    nullable: false
  })
  metadata!: Prisma.InputJsonValue;
}
