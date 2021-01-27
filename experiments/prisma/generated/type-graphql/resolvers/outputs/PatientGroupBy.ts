import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PatientCountAggregate } from "../outputs/PatientCountAggregate";
import { PatientMaxAggregate } from "../outputs/PatientMaxAggregate";
import { PatientMinAggregate } from "../outputs/PatientMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PatientGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => PatientCountAggregate, {
    nullable: true
  })
  count?: PatientCountAggregate | null;

  @TypeGraphQL.Field(_type => PatientMinAggregate, {
    nullable: true
  })
  min?: PatientMinAggregate | null;

  @TypeGraphQL.Field(_type => PatientMaxAggregate, {
    nullable: true
  })
  max?: PatientMaxAggregate | null;
}
