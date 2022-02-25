import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCreatealiasesInput } from "../inputs/MainUserCreatealiasesInput";
import { MainUserCreategradesInput } from "../inputs/MainUserCreategradesInput";
import { PostCreateNestedManyWithoutEditorInput } from "../inputs/PostCreateNestedManyWithoutEditorInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("MainUserCreateWithoutPostsInput", {
  isAbstract: true
})
export class MainUserCreateWithoutPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  age!: number;

  balance!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutEditorInput, {
    nullable: true
  })
  editorPosts?: PostCreateNestedManyWithoutEditorInput | undefined;

  @TypeGraphQL.Field(_type => MainUserCreategradesInput, {
    nullable: true
  })
  grades?: MainUserCreategradesInput | undefined;

  @TypeGraphQL.Field(_type => MainUserCreatealiasesInput, {
    nullable: true
  })
  aliases?: MainUserCreatealiasesInput | undefined;

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
    nullable: false
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: number) {
    this.balance = balance;
  }
}
