import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProblemOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  problemText?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  creatorId?: "asc" | "desc" | undefined;
}
