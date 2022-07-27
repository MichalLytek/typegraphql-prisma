import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostsInput } from "../inputs/UserCreateOrConnectWithoutPostsInput";
import { UserCreateWithoutPostsInput } from "../inputs/UserCreateWithoutPostsInput";
import { UserUpdateWithoutPostsInput } from "../inputs/UserUpdateWithoutPostsInput";
import { UserUpsertWithoutPostsInput } from "../inputs/UserUpsertWithoutPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutPostsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutPostsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPostsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPostsInput | undefined;
}
