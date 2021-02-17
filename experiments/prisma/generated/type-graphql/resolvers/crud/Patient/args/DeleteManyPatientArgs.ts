import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPatientArgs {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;
}
