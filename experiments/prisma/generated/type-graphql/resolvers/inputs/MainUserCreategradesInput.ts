import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MainUserCreategradesInput", {
  isAbstract: true
})
export class MainUserCreategradesInput {
  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: false
  })
  set!: number[];
}
