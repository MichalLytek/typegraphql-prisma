import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PatientMinAggregate", {
  isAbstract: true
})
export class PatientMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;
}
