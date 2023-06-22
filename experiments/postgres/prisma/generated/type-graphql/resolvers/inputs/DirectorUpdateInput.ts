import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateManyWithoutDirectorNestedInput } from "../inputs/MovieUpdateManyWithoutDirectorNestedInput";

@TypeGraphQL.InputType("DirectorUpdateInput", {})
export class DirectorUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  firstName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateManyWithoutDirectorNestedInput, {
    nullable: true
  })
  movies?: MovieUpdateManyWithoutDirectorNestedInput | undefined;
}
