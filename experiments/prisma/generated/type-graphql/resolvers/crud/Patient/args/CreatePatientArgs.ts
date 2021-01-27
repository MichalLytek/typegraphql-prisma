import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientUncheckedCreateInput } from "../../../inputs/PatientUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePatientArgs {
  @TypeGraphQL.Field(_type => PatientUncheckedCreateInput, {
    nullable: false
  })
  data!: PatientUncheckedCreateInput;
}
