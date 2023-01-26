import * as TypeGraphQL from "type-graphql";

export enum TransactionIsolationLevel {
  Serializable = "Serializable"
}
TypeGraphQL.registerEnumType(TransactionIsolationLevel, {
  name: "TransactionIsolationLevel",
  description: undefined,
});
