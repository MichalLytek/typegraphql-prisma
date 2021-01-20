import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientCreateWithoutEditorPostsInput } from "../inputs/ClientCreateWithoutEditorPostsInput";
import { ClientUpdateWithoutEditorPostsInput } from "../inputs/ClientUpdateWithoutEditorPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpsertWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => ClientUpdateWithoutEditorPostsInput, {
    nullable: false
  })
  update!: ClientUpdateWithoutEditorPostsInput;

  @TypeGraphQL.Field(_type => ClientCreateWithoutEditorPostsInput, {
    nullable: false
  })
  create!: ClientCreateWithoutEditorPostsInput;
}
