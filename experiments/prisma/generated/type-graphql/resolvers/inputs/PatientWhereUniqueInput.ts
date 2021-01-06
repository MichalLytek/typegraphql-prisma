import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PatientFirstNameLastNameCompoundUniqueInput } from "../inputs/PatientFirstNameLastNameCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientWhereUniqueInput {
  @TypeGraphQL.Field(_type => PatientFirstNameLastNameCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  firstName_lastName?: PatientFirstNameLastNameCompoundUniqueInput | undefined;
}
