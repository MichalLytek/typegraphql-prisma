import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  number?: "asc" | "desc" | undefined;
}
