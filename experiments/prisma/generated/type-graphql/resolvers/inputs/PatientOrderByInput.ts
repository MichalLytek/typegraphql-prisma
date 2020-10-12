import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
    description: undefined
  })
  email?: "asc" | "desc" | undefined;
}
