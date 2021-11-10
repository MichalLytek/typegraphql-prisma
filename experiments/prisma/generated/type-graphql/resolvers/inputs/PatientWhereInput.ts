import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PatientWhereInput", {
  isAbstract: true
})
export class PatientWhereInput {
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
