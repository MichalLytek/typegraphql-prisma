import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCreateNestedOneWithoutEditorPostsInput } from "../inputs/MainUserCreateNestedOneWithoutEditorPostsInput";
import { MainUserCreateNestedOneWithoutPostsInput } from "../inputs/MainUserCreateNestedOneWithoutPostsInput";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.InputType("PostCreateInput", {})
export class PostCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

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

  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true
  })
  kind?: "BLOG" | "ADVERT" | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  metadata!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => MainUserCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  author!: MainUserCreateNestedOneWithoutPostsInput;

  @TypeGraphQL.Field(_type => MainUserCreateNestedOneWithoutEditorPostsInput, {
    nullable: true
  })
  editor?: MainUserCreateNestedOneWithoutEditorPostsInput | undefined;
}
