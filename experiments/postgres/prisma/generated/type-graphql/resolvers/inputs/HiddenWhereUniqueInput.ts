import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { HiddenWhereInput } from "../inputs/HiddenWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("HiddenWhereUniqueInput", {
  isAbstract: true
})
export class HiddenWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;
}
