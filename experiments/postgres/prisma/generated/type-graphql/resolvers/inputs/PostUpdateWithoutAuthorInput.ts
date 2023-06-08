import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserUpdateOneWithoutEditorPostsNestedInput } from "../inputs/MainUserUpdateOneWithoutEditorPostsNestedInput";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.InputType("PostUpdateWithoutAuthorInput")
export class PostUpdateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtitle?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true
  })
  kind?: "BLOG" | "ADVERT" | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  metadata?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => MainUserUpdateOneWithoutEditorPostsNestedInput, {
    nullable: true
  })
  editor?: MainUserUpdateOneWithoutEditorPostsNestedInput | undefined;
}
