import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientCreateOrConnectWithouteditorPostsInput } from "../inputs/ClientCreateOrConnectWithouteditorPostsInput";
import { ClientCreateWithoutEditorPostsInput } from "../inputs/ClientCreateWithoutEditorPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientCreateOneWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => ClientCreateWithoutEditorPostsInput, {
    nullable: true,
    description: undefined
  })
  create?: ClientCreateWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithouteditorPostsInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ClientCreateOrConnectWithouteditorPostsInput | undefined;
}
