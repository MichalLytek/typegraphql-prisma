import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MovieOrderByRelevanceFieldEnum } from "../../enums/MovieOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MovieOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"directorFirstName" | "directorLastName" | "title">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
