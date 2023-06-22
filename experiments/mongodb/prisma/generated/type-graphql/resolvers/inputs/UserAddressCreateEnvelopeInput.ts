import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserAddressCreateInput } from "../inputs/UserAddressCreateInput";

@TypeGraphQL.InputType("UserAddressCreateEnvelopeInput", {})
export class UserAddressCreateEnvelopeInput {
  @TypeGraphQL.Field(_type => UserAddressCreateInput, {
    nullable: true
  })
  set?: UserAddressCreateInput | undefined;
}
