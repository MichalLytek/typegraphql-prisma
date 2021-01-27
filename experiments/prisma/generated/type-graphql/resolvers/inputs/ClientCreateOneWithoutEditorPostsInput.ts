import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientCreateOrConnectWithouteditorPostsInput } from "../inputs/ClientCreateOrConnectWithouteditorPostsInput";
import { ClientUncheckedCreateWithoutEditorPostsInput } from "../inputs/ClientUncheckedCreateWithoutEditorPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateOneWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutEditorPostsInput, {
    nullable: true
  })
  create?: ClientUncheckedCreateWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  connect?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithouteditorPostsInput, {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithouteditorPostsInput | undefined;
}
