import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostOrderByRelevanceFieldEnum } from "../../enums/PostOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostOrderByRelevanceInput", {})
export class PostOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PostOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"uuid" | "title" | "subtitle" | "content">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
