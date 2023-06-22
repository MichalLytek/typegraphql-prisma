import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.InputType("NullableEnumPostKindFieldUpdateOperationsInput", {})
export class NullableEnumPostKindFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true
  })
  set?: "BLOG" | "ADVERT" | undefined;
}
