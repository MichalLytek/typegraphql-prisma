import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserAddressCreateInput } from "../inputs/UserAddressCreateInput";
import { UserAddressUpdateInput } from "../inputs/UserAddressUpdateInput";

@TypeGraphQL.InputType("UserAddressUpdateEnvelopeInput", {})
export class UserAddressUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => UserAddressCreateInput, {
    nullable: true
  })
  set?: UserAddressCreateInput | undefined;

  @TypeGraphQL.Field(_type => UserAddressUpdateInput, {
    nullable: true
  })
  update?: UserAddressUpdateInput | undefined;
}
