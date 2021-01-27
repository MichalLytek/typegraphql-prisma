import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientCreateOrConnectWithouteditorPostsInput } from "../inputs/ClientCreateOrConnectWithouteditorPostsInput";
import { ClientUncheckedCreateWithoutEditorPostsInput } from "../inputs/ClientUncheckedCreateWithoutEditorPostsInput";
import { ClientUncheckedUpdateWithoutEditorPostsInput } from "../inputs/ClientUncheckedUpdateWithoutEditorPostsInput";
import { ClientUpsertWithoutEditorPostsInput } from "../inputs/ClientUpsertWithoutEditorPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateOneWithoutEditorPostsInput {
  @TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutEditorPostsInput, {
    nullable: true
  })
  create?: ClientUncheckedCreateWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  connect?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutEditorPostsInput, {
    nullable: true
  })
  update?: ClientUncheckedUpdateWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpsertWithoutEditorPostsInput, {
    nullable: true
  })
  upsert?: ClientUpsertWithoutEditorPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithouteditorPostsInput, {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithouteditorPostsInput | undefined;
}
