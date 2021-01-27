import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientCreateOrConnectWithoutpostsInput } from "../inputs/ClientCreateOrConnectWithoutpostsInput";
import { ClientUncheckedCreateWithoutPostsInput } from "../inputs/ClientUncheckedCreateWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutPostsInput, {
    nullable: true
  })
  create?: ClientUncheckedCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  connect?: ClientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutpostsInput, {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutpostsInput | undefined;
}
