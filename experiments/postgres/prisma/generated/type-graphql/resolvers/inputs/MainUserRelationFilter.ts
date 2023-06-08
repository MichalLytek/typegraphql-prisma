import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";

@TypeGraphQL.InputType("MainUserRelationFilter")
export class MainUserRelationFilter {
  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  is?: MainUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  isNot?: MainUserWhereInput | undefined;
}
