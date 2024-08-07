import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnPostEditorArgs } from "./args/CreateManyAndReturnPostEditorArgs";
import { MainUser } from "../../models/MainUser";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.ObjectType("CreateManyAndReturnPost", {})
export class CreateManyAndReturnPost {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  subtitle!: string;

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

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  metadata!: Prisma.JsonValue;

  @TypeGraphQL.Field(_type => MainUser, {
    nullable: false
  })
  author!: MainUser;

  editor!: MainUser | null;

  @TypeGraphQL.Field(_type => MainUser, {
    name: "editor",
    nullable: true
  })
  getEditor(@TypeGraphQL.Root() root: CreateManyAndReturnPost, @TypeGraphQL.Args() args: CreateManyAndReturnPostEditorArgs): MainUser | null {
    return root.editor;
  }
}
