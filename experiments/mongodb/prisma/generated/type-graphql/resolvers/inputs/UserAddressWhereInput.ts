import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UserAddressWhereInput", {
  isAbstract: true
})
export class UserAddressWhereInput {
  @TypeGraphQL.Field(_type => [UserAddressWhereInput], {
    nullable: true
  })
  AND?: UserAddressWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAddressWhereInput], {
    nullable: true
  })
  OR?: UserAddressWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserAddressWhereInput], {
    nullable: true
  })
  NOT?: UserAddressWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  street?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  number?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  city?: StringFilter | undefined;
}
