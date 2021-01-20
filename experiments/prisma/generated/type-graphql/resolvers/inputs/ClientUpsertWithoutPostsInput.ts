import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput";
import { ClientUpdateWithoutPostsInput } from "../inputs/ClientUpdateWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => ClientUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: ClientUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => ClientCreateWithoutPostsInput, {
    nullable: false
  })
  create!: ClientCreateWithoutPostsInput;
}
