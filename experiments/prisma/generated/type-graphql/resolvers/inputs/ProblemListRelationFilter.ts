import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
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
