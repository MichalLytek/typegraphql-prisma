import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
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
