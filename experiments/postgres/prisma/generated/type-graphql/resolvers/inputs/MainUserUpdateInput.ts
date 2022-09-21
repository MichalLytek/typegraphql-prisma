import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserUpdatealiasesInput } from "../inputs/MainUserUpdatealiasesInput";
import { MainUserUpdategradesInput } from "../inputs/MainUserUpdategradesInput";
import { PostUpdateManyWithoutAuthorNestedInput } from "../inputs/PostUpdateManyWithoutAuthorNestedInput";
import { PostUpdateManyWithoutEditorNestedInput } from "../inputs/PostUpdateManyWithoutEditorNestedInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("MainUserUpdateInput", {
  isAbstract: true
})
export class MainUserUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  age?: number | undefined;

  balance?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  amount?: number | undefined;

  posts?: PostUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutEditorNestedInput, {
    nullable: true
  })
  editorPosts?: PostUpdateManyWithoutEditorNestedInput | undefined;

  @TypeGraphQL.Field(_type => MainUserUpdategradesInput, {
    nullable: true
  })
  grades?: MainUserUpdategradesInput | undefined;

  @TypeGraphQL.Field(_type => MainUserUpdatealiasesInput, {
    nullable: true
  })
  aliases?: MainUserUpdatealiasesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: string | undefined) {
    this.name = name;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: number | undefined) {
    this.balance = balance;
  }

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostUpdateManyWithoutAuthorNestedInput | undefined) {
    this.posts = posts;
  }
}
