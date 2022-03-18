import * as TypeGraphQL from "type-graphql";

export enum ProblemScalarFieldEnum {
  id = "id",
  problemText = "problemText",
  creatorId = "creatorId"
}
TypeGraphQL.registerEnumType(ProblemScalarFieldEnum, {
  name: "ProblemScalarFieldEnum",
  description: undefined,
});
