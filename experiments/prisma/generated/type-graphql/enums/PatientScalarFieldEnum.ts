import * as TypeGraphQL from "type-graphql";

export enum PatientScalarFieldEnum {
  firstName = "firstName",
  lastName = "lastName",
  email = "email"
}
TypeGraphQL.registerEnumType(PatientScalarFieldEnum, {
  name: "PatientScalarFieldEnum",
  description: undefined,
});
