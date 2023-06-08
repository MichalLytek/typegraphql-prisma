import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemOrderByRelevanceFieldEnum } from "../../enums/ProblemOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProblemOrderByRelevanceInput")
export class ProblemOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ProblemOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "problemText"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
