import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientCreateOrConnectWithouteditorPostsInput } from "../inputs/ClientCreateOrConnectWithouteditorPostsInput";
import { ClientCreateWithoutEditorPostsInput } from "../inputs/ClientCreateWithoutEditorPostsInput";
import { ClientUpdateWithoutEditorPostsInput } from "../inputs/ClientUpdateWithoutEditorPostsInput";
import { ClientUpsertWithoutEditorPostsInput } from "../inputs/ClientUpsertWithoutEditorPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientUpdateOneWithoutEditorPostsInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ClientUpdateWithoutEditorPostsInput, {
    nullable: true,
    description: undefined
  })
  update?: ClientUpdateWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpsertWithoutEditorPostsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ClientUpsertWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithouteditorPostsInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ClientCreateOrConnectWithouteditorPostsInput | undefined;
}
