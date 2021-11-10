import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MainUserCreateManyaliasesInput", {
  isAbstract: true
})
export class MainUserCreateManyaliasesInput {
  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  set!: string[];
}
