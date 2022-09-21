import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserUpdatealiasesInput } from "../inputs/MainUserUpdatealiasesInput";
import { MainUserUpdategradesInput } from "../inputs/MainUserUpdategradesInput";
import { PostUpdateManyWithoutEditorNestedInput } from "../inputs/PostUpdateManyWithoutEditorNestedInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("MainUserUpdateWithoutPostsInput", {
  isAbstract: true
})
export class MainUserUpdateWithoutPostsInput {
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
}
