import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Equipment", {
  isAbstract: true
})
export class Equipment {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;
}
