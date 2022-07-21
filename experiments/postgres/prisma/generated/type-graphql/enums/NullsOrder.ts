import * as TypeGraphQL from "type-graphql";

export enum NullsOrder {
  first = "first",
  last = "last"
}
TypeGraphQL.registerEnumType(NullsOrder, {
  name: "NullsOrder",
  description: undefined,
});
