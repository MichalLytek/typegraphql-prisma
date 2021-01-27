import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientCreateOrConnectWithoutpostsInput } from "../inputs/ClientCreateOrConnectWithoutpostsInput";
import { ClientUncheckedCreateWithoutPostsInput } from "../inputs/ClientUncheckedCreateWithoutPostsInput";
import { ClientUncheckedUpdateWithoutPostsInput } from "../inputs/ClientUncheckedUpdateWithoutPostsInput";
import { ClientUpsertWithoutPostsInput } from "../inputs/ClientUpsertWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpdateOneRequiredWithoutPostsInput {
  @TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutPostsInput, {
    nullable: true
  })
  create?: ClientUncheckedCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  connect?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutPostsInput, {
    nullable: true
  })
  update?: ClientUncheckedUpdateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: ClientUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutpostsInput, {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutpostsInput | undefined;
}
