import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PatientFirstNameLastNameCompoundUniqueInput } from "../inputs/PatientFirstNameLastNameCompoundUniqueInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PatientWhereUniqueInput", {
  isAbstract: true
})
export class PatientWhereUniqueInput {
  @TypeGraphQL.Field(_type => PatientFirstNameLastNameCompoundUniqueInput, {
    nullable: true
  })
  firstName_lastName?: PatientFirstNameLastNameCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true
  })
  AND?: PatientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true
  })
  OR?: PatientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true
  })
  NOT?: PatientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;
}
