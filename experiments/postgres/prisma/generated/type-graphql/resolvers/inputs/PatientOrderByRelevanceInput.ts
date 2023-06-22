import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PatientOrderByRelevanceFieldEnum } from "../../enums/PatientOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PatientOrderByRelevanceInput", {})
export class PatientOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PatientOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"firstName" | "lastName" | "email">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
