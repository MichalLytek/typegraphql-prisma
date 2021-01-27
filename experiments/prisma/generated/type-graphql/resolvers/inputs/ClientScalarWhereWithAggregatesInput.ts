import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { EnumRoleWithAggregatesFilter } from "../inputs/EnumRoleWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ClientScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ClientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ClientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ClientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ClientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  age?: IntWithAggregatesFilter | undefined;

  balance?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  amount?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleWithAggregatesFilter, {
    nullable: true
  })
  role?: EnumRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: StringNullableWithAggregatesFilter | undefined) {
    this.name = name;
  }

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: FloatWithAggregatesFilter | undefined) {
    this.balance = balance;
  }
}
