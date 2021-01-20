import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemWhereInput } from "../inputs/ProblemWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemListRelationFilter {
  @TypeGraphQL.Field(_type => ProblemWhereInput, {
    nullable: true
  })
  every?: ProblemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProblemWhereInput, {
    nullable: true
  })
  some?: ProblemWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProblemWhereInput, {
    nullable: true
  })
  none?: ProblemWhereInput | undefined;
}
