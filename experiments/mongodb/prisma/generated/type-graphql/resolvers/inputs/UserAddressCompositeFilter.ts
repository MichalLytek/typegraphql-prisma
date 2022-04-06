import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserAddressObjectEqualityInput } from "../inputs/UserAddressObjectEqualityInput";
import { UserAddressWhereInput } from "../inputs/UserAddressWhereInput";

@TypeGraphQL.InputType("UserAddressCompositeFilter", {
  isAbstract: true
})
export class UserAddressCompositeFilter {
  @TypeGraphQL.Field(_type => UserAddressObjectEqualityInput, {
    nullable: true
  })
  equals?: UserAddressObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => UserAddressWhereInput, {
    nullable: true
  })
  is?: UserAddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserAddressWhereInput, {
    nullable: true
  })
  isNot?: UserAddressWhereInput | undefined;
}
