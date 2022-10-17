import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("UserAddressUpdateInput", {
  isAbstract: true
})
export class UserAddressUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  street?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  number?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | undefined;
}
