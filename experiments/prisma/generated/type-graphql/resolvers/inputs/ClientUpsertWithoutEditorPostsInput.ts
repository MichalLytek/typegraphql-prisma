import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientCreateWithoutEditorPostsInput } from "../inputs/ClientCreateWithoutEditorPostsInput";
import { ClientUpdateWithoutEditorPostsInput } from "../inputs/ClientUpdateWithoutEditorPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientUpsertWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => ClientUpdateWithoutEditorPostsInput, {
    nullable: false,
    description: undefined
  })
  update!: ClientUpdateWithoutEditorPostsInput;

  @TypeGraphQL.Field(_type => ClientCreateWithoutEditorPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: ClientCreateWithoutEditorPostsInput;
}
