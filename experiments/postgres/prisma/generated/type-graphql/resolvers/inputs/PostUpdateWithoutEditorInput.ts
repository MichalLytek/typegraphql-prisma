import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserUpdateOneRequiredWithoutPostsNestedInput } from "../inputs/MainUserUpdateOneRequiredWithoutPostsNestedInput";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.InputType("PostUpdateWithoutEditorInput", {
  isAbstract: true
})
export class PostUpdateWithoutEditorInput {
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

  @TypeGraphQL.Field(_type => MainUserUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true
  })
  author?: MainUserUpdateOneRequiredWithoutPostsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true
  })
  kind?: "BLOG" | "ADVERT" | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  metadata?: Prisma.InputJsonValue | undefined;
}
