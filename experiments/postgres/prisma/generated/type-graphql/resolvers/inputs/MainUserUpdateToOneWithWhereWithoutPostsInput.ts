import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserUpdateWithoutPostsInput } from "../inputs/MainUserUpdateWithoutPostsInput";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";

@TypeGraphQL.InputType("MainUserUpdateToOneWithWhereWithoutPostsInput", {
  isAbstract: true
})
export class MainUserUpdateToOneWithWhereWithoutPostsInput {
  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MainUserUpdateWithoutPostsInput, {
    nullable: false
  })
  data!: MainUserUpdateWithoutPostsInput;
}
