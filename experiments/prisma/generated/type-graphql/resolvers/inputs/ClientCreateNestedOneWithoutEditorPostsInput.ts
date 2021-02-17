import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientCreateOrConnectWithoutEditorPostsInput } from "../inputs/ClientCreateOrConnectWithoutEditorPostsInput";
import { ClientCreateWithoutEditorPostsInput } from "../inputs/ClientCreateWithoutEditorPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateNestedOneWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => ClientCreateWithoutEditorPostsInput, {
    nullable: true
  })
  create?: ClientCreateWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutEditorPostsInput, {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  connect?: ClientWhereUniqueInput | undefined;
}
