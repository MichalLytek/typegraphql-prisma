import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientCreateOrConnectWithoutPostsInput } from "../inputs/ClientCreateOrConnectWithoutPostsInput";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput";
import { ClientUpdateWithoutPostsInput } from "../inputs/ClientUpdateWithoutPostsInput";
import { ClientUpsertWithoutPostsInput } from "../inputs/ClientUpsertWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateOneRequiredWithoutPostsInput {
  @TypeGraphQL.Field(_type => ClientCreateWithoutPostsInput, {
    nullable: true
  })
  create?: ClientCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: ClientUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  connect?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpdateWithoutPostsInput, {
    nullable: true
  })
  update?: ClientUpdateWithoutPostsInput | undefined;
}
