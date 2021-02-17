import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientOrderByInput } from "../../../inputs/PatientOrderByInput";
import { PatientScalarWhereWithAggregatesInput } from "../../../inputs/PatientScalarWhereWithAggregatesInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { PatientScalarFieldEnum } from "../../../../enums/PatientScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPatientArgs {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PatientOrderByInput], {
    nullable: true
  })
  orderBy?: PatientOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"firstName" | "lastName" | "email">;

  @TypeGraphQL.Field(_type => PatientScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PatientScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
