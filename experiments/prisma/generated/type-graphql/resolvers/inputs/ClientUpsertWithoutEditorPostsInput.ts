import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
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
