import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientUncheckedUpdateInput } from "../../../inputs/PatientUncheckedUpdateInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePatientArgs {
  @TypeGraphQL.Field(_type => PatientUncheckedUpdateInput, {
    nullable: false
  })
  data!: PatientUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;
}
