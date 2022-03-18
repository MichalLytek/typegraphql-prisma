import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCreateOrConnectWithoutPostsInput } from "../inputs/MainUserCreateOrConnectWithoutPostsInput";
import { MainUserCreateWithoutPostsInput } from "../inputs/MainUserCreateWithoutPostsInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@TypeGraphQL.InputType("MainUserCreateNestedOneWithoutPostsInput", {
  isAbstract: true
})
export class MainUserCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => MainUserCreateWithoutPostsInput, {
    nullable: true
  })
  create?: MainUserCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => MainUserCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: MainUserCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MainUserWhereUniqueInput | undefined;
}
