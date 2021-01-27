import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedJsonFilter } from "../inputs/NestedJsonFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class JsonWithAggregatesFilter {
  @TypeGraphQL.Field(_type => GraphQLJSON, {
    nullable: true
  })
  equals?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => GraphQLJSON, {
    nullable: true
  })
  not?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedJsonFilter, {
    nullable: true
  })
  min?: NestedJsonFilter | undefined;

  @TypeGraphQL.Field(_type => NestedJsonFilter, {
    nullable: true
  })
  max?: NestedJsonFilter | undefined;
}
