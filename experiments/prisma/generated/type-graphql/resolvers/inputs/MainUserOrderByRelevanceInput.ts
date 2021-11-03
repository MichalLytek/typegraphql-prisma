import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { UserOrderByRelevanceFieldEnum } from "../../enums/UserOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MainUserOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [UserOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"email" | "name" | "aliases">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
