import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientUncheckedCreateWithoutPostsInput } from "../inputs/ClientUncheckedCreateWithoutPostsInput";
import { ClientUncheckedUpdateWithoutPostsInput } from "../inputs/ClientUncheckedUpdateWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: ClientUncheckedUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutPostsInput, {
    nullable: false
  })
  create!: ClientUncheckedCreateWithoutPostsInput;
}
