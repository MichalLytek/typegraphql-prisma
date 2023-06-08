import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("HiddenWhereInput")
export class HiddenWhereInput {
  @TypeGraphQL.Field(_type => [HiddenWhereInput], {
    nullable: true
  })
  AND?: HiddenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HiddenWhereInput], {
    nullable: true
  })
  OR?: HiddenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [HiddenWhereInput], {
    nullable: true
  })
  NOT?: HiddenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;
}
