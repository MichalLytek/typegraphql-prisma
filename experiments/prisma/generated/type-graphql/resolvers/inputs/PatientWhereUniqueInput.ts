import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PatientFirstNameLastNameCompoundUniqueInput } from "../inputs/PatientFirstNameLastNameCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PatientWhereUniqueInput {
  @TypeGraphQL.Field(_type => PatientFirstNameLastNameCompoundUniqueInput, {
    nullable: true
  })
  firstName_lastName?: PatientFirstNameLastNameCompoundUniqueInput | undefined;
}
