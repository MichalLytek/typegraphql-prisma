import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedJsonFilter {
  @TypeGraphQL.Field(_type => GraphQLJSON, {
    nullable: true
  })
  equals?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => GraphQLJSON, {
    nullable: true
  })
  not?: Prisma.InputJsonValue | undefined;
}
