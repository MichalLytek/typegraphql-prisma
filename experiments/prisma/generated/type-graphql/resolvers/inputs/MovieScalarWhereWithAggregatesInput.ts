import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  directorFirstName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  directorLastName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;
}
