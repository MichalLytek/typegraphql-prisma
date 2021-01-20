import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ClientWhereInput } from "../inputs/ClientWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientRelationFilter {
  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  is?: ClientWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClientWhereInput, {
    nullable: true
  })
  isNot?: ClientWhereInput | undefined;
}
