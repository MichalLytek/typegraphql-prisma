import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCreateOrConnectWithoutPostsInput } from "../inputs/MainUserCreateOrConnectWithoutPostsInput";
import { MainUserCreateWithoutPostsInput } from "../inputs/MainUserCreateWithoutPostsInput";
import { MainUserUpdateToOneWithWhereWithoutPostsInput } from "../inputs/MainUserUpdateToOneWithWhereWithoutPostsInput";
import { MainUserUpsertWithoutPostsInput } from "../inputs/MainUserUpsertWithoutPostsInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@TypeGraphQL.InputType("MainUserUpdateOneRequiredWithoutPostsNestedInput")
export class MainUserUpdateOneRequiredWithoutPostsNestedInput {
  @TypeGraphQL.Field(_type => MainUserCreateWithoutPostsInput, {
    nullable: true
  })
  create?: MainUserCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => MainUserCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: MainUserCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => MainUserUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: MainUserUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MainUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MainUserUpdateToOneWithWhereWithoutPostsInput, {
    nullable: true
  })
  update?: MainUserUpdateToOneWithWhereWithoutPostsInput | undefined;
}
