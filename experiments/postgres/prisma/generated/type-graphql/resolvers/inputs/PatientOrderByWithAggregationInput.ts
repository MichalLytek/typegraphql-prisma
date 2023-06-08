import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCountOrderByAggregateInput } from "../inputs/PatientCountOrderByAggregateInput";
import { PatientMaxOrderByAggregateInput } from "../inputs/PatientMaxOrderByAggregateInput";
import { PatientMinOrderByAggregateInput } from "../inputs/PatientMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PatientOrderByWithAggregationInput")
export class PatientOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PatientCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PatientCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PatientMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PatientMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PatientMinOrderByAggregateInput | undefined;
}
