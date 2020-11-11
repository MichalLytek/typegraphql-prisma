import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientCreateOrConnectWithoutpostsInput } from "../inputs/ClientCreateOrConnectWithoutpostsInput";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput";
import { ClientUpdateWithoutPostsInput } from "../inputs/ClientUpdateWithoutPostsInput";
import { ClientUpsertWithoutPostsInput } from "../inputs/ClientUpsertWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientUpdateOneRequiredWithoutPostsInput {
  @TypeGraphQL.Field(_type => ClientCreateWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  create?: ClientCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpdateWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  update?: ClientUpdateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpsertWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ClientUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutpostsInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ClientCreateOrConnectWithoutpostsInput | undefined;
}
