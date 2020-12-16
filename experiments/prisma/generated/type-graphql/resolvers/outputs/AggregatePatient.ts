import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PatientMaxAggregate } from "../outputs/PatientMaxAggregate";
import { PatientMinAggregate } from "../outputs/PatientMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class AggregatePatient {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  count!: number | null;

  @TypeGraphQL.Field(_type => PatientMinAggregate, {
    nullable: true,
    description: undefined
  })
  min!: PatientMinAggregate | null;

  @TypeGraphQL.Field(_type => PatientMaxAggregate, {
    nullable: true,
    description: undefined
  })
  max!: PatientMaxAggregate | null;
}
