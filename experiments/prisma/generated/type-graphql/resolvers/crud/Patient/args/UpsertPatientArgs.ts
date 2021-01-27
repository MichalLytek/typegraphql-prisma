import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientUncheckedCreateInput } from "../../../inputs/PatientUncheckedCreateInput";
import { PatientUncheckedUpdateInput } from "../../../inputs/PatientUncheckedUpdateInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPatientArgs {
  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientUncheckedCreateInput, {
    nullable: false
  })
  create!: PatientUncheckedCreateInput;

  @TypeGraphQL.Field(_type => PatientUncheckedUpdateInput, {
    nullable: false
  })
  update!: PatientUncheckedUpdateInput;
}
