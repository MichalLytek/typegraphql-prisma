import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorOrderByRelevanceFieldEnum } from "../../enums/CreatorOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CreatorOrderByRelevanceInput")
export class CreatorOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CreatorOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "name"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
