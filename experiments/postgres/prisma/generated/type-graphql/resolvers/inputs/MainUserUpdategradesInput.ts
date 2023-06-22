import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MainUserUpdategradesInput", {})
export class MainUserUpdategradesInput {
  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  set?: number[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  push?: number[] | undefined;
}
