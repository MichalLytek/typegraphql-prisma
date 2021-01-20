import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { IntFilter } from "../inputs/IntFilter";
import { ProblemListRelationFilter } from "../inputs/ProblemListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorWhereInput {
  @TypeGraphQL.Field(_type => [CreatorWhereInput], {
    nullable: true
  })
  AND?: CreatorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereInput], {
    nullable: true
  })
  OR?: CreatorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereInput], {
    nullable: true
  })
  NOT?: CreatorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProblemListRelationFilter, {
    nullable: true
  })
  likes?: ProblemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProblemListRelationFilter, {
    nullable: true
  })
  problems?: ProblemListRelationFilter | undefined;
}
