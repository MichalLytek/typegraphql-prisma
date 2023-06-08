import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ProblemScalarWhereInput")
export class ProblemScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProblemScalarWhereInput], {
    nullable: true
  })
  AND?: ProblemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemScalarWhereInput], {
    nullable: true
  })
  OR?: ProblemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemScalarWhereInput], {
    nullable: true
  })
  NOT?: ProblemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  problemText?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  creatorId?: IntNullableFilter | undefined;
}
