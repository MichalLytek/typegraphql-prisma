import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  directorFirstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  directorLastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  title?: "asc" | "desc" | undefined;
}
