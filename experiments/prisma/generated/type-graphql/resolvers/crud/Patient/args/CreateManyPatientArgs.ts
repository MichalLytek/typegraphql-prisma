import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientCreateManyInput } from "../../../inputs/PatientCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPatientArgs {
  @TypeGraphQL.Field(_type => [PatientCreateManyInput], {
    nullable: false
  })
  data!: PatientCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
