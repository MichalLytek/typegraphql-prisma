import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PatientOrderByWithRelationAndSearchRelevanceInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";
import { PatientScalarFieldEnum } from "../../../../enums/PatientScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPatientArgs {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PatientOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PatientOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  cursor?: PatientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"firstName" | "lastName" | "email"> | undefined;
}
