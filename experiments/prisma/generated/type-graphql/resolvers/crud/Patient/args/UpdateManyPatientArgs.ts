import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientUncheckedUpdateManyInput } from "../../../inputs/PatientUncheckedUpdateManyInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPatientArgs {
  @TypeGraphQL.Field(_type => PatientUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: PatientUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;
}
