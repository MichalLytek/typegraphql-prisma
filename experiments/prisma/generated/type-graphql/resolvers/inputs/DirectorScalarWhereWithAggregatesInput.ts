import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("DirectorScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class DirectorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DirectorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DirectorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DirectorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DirectorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DirectorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DirectorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  firstName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lastName?: StringWithAggregatesFilter | undefined;
}
