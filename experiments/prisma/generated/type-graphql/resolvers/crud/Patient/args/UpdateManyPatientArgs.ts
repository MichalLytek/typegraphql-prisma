import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientUpdateManyMutationInput } from "../../../inputs/PatientUpdateManyMutationInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPatientArgs {
  @TypeGraphQL.Field(_type => PatientUpdateManyMutationInput, {
    nullable: false
  })
  data!: PatientUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;
}
