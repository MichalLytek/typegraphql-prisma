import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientOrderByWithRelationInput } from "../../../inputs/PatientOrderByWithRelationInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePatientArgs {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PatientOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PatientOrderByWithRelationInput[] | undefined;

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
}
