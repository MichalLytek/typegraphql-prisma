import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CreatorScalarWhereInput", {
  isAbstract: true
})
export class CreatorScalarWhereInput {
  @TypeGraphQL.Field(_type => [CreatorScalarWhereInput], {
    nullable: true
  })
  AND?: CreatorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorScalarWhereInput], {
    nullable: true
  })
  OR?: CreatorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorScalarWhereInput], {
    nullable: true
  })
  NOT?: CreatorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
