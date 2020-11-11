import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientCreateWithoutEditorPostsInput } from "../inputs/ClientCreateWithoutEditorPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientCreateOrConnectWithouteditorPostsInput {
  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClientCreateWithoutEditorPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: ClientCreateWithoutEditorPostsInput;
}
