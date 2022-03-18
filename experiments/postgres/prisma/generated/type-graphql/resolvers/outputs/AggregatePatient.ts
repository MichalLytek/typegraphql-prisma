import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCountAggregate } from "../outputs/PatientCountAggregate";
import { PatientMaxAggregate } from "../outputs/PatientMaxAggregate";
import { PatientMinAggregate } from "../outputs/PatientMinAggregate";

@TypeGraphQL.ObjectType("AggregatePatient", {
  isAbstract: true
})
export class AggregatePatient {
  @TypeGraphQL.Field(_type => PatientCountAggregate, {
    nullable: true
  })
  _count!: PatientCountAggregate | null;

  @TypeGraphQL.Field(_type => PatientMinAggregate, {
    nullable: true
  })
  _min!: PatientMinAggregate | null;

  @TypeGraphQL.Field(_type => PatientMaxAggregate, {
    nullable: true
  })
  _max!: PatientMaxAggregate | null;
}
