import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientUncheckedCreateWithoutPostsInput } from "../inputs/ClientUncheckedCreateWithoutPostsInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientCreateOrConnectWithoutpostsInput {
  @TypeGraphQL.Field(_type => ClientWhereUniqueInput, {
    nullable: false
  })
  where!: ClientWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutPostsInput, {
    nullable: false
  })
  create!: ClientUncheckedCreateWithoutPostsInput;
}
