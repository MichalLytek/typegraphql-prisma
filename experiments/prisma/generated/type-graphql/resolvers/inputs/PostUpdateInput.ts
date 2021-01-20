import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ClientUpdateOneRequiredWithoutPostsInput } from "../inputs/ClientUpdateOneRequiredWithoutPostsInput";
import { ClientUpdateOneWithoutEditorPostsInput } from "../inputs/ClientUpdateOneWithoutEditorPostsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumPostKindFieldUpdateOperationsInput } from "../inputs/NullableEnumPostKindFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  uuid?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  published?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  subtitle?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumPostKindFieldUpdateOperationsInput, {
    nullable: true
  })
  kind?: NullableEnumPostKindFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLJSON, {
    nullable: true
  })
  metadata?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => ClientUpdateOneRequiredWithoutPostsInput, {
    nullable: true
  })
  author?: ClientUpdateOneRequiredWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => ClientUpdateOneWithoutEditorPostsInput, {
    nullable: true
  })
  editor?: ClientUpdateOneWithoutEditorPostsInput | undefined;
}
