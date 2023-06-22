import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryOrderByRelevanceFieldEnum } from "../../enums/CategoryOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoryOrderByRelevanceInput", {})
export class CategoryOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CategoryOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "slug">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
