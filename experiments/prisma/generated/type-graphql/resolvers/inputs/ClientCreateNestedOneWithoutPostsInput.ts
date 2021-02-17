import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientCreateOrConnectWithoutPostsInput } from "../inputs/ClientCreateOrConnectWithoutPostsInput";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => ClientCreateWithoutPostsInput, {
    nullable: true
  })
  create?: ClientCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: ClientCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: true
  })
  connect?: ClientWhereUniqueInput | undefined;
}
