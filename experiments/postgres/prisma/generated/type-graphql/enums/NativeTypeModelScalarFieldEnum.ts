import * as TypeGraphQL from "type-graphql";

export enum NativeTypeModelScalarFieldEnum {
  id = "id",
  bigInt = "bigInt",
  byteA = "byteA",
  decimal = "decimal"
}
TypeGraphQL.registerEnumType(NativeTypeModelScalarFieldEnum, {
  name: "NativeTypeModelScalarFieldEnum",
  description: undefined,
});
