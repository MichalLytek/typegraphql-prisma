import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NullableEnumPostKindFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true
  })
  set?: "BLOG" | "ADVERT" | undefined;
}
