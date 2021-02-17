import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
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
