import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientUncheckedCreateWithoutEditorPostsInput } from "../inputs/ClientUncheckedCreateWithoutEditorPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateOrConnectWithouteditorPostsInput {
  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutEditorPostsInput, {
    nullable: false
  })
  create!: ClientUncheckedCreateWithoutEditorPostsInput;
}
