import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorCreateNestedOneWithoutMoviesInput } from "../inputs/DirectorCreateNestedOneWithoutMoviesInput";

@TypeGraphQL.InputType("MovieCreateInput", {
  isAbstract: true
})
export class MovieCreateInput {
  @TypeGraphQL.Field(_type => DirectorCreateNestedOneWithoutMoviesInput, {
    nullable: false
  })
  director!: DirectorCreateNestedOneWithoutMoviesInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;
}
