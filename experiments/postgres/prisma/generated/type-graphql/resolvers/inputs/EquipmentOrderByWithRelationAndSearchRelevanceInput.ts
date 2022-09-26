import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { EquipmentOrderByRelevanceInput } from "../inputs/EquipmentOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EquipmentOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class EquipmentOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EquipmentOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: EquipmentOrderByRelevanceInput | undefined;
}
