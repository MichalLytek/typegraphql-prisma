import * as TypeGraphQL from "type-graphql";

export enum PatientOrderByRelevanceFieldEnum {
  firstName = "firstName",
  lastName = "lastName",
  email = "email"
}
TypeGraphQL.registerEnumType(PatientOrderByRelevanceFieldEnum, {
  name: "PatientOrderByRelevanceFieldEnum",
  description: undefined,
});
