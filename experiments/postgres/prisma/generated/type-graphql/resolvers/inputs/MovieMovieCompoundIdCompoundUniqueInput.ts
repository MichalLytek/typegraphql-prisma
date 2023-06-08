import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MovieMovieCompoundIdCompoundUniqueInput")
export class MovieMovieCompoundIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  directorFirstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  directorLastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;
}
