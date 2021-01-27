import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientUncheckedCreateWithoutEditorPostsInput } from "../inputs/ClientUncheckedCreateWithoutEditorPostsInput";
import { ClientUncheckedUpdateWithoutEditorPostsInput } from "../inputs/ClientUncheckedUpdateWithoutEditorPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpsertWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutEditorPostsInput, {
    nullable: false
  })
  update!: ClientUncheckedUpdateWithoutEditorPostsInput;

  @TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutEditorPostsInput, {
    nullable: false
  })
  create!: ClientUncheckedCreateWithoutEditorPostsInput;
}
