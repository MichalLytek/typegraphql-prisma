import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { DirectorCreateNestedOneWithoutMoviesInput } from "../inputs/DirectorCreateNestedOneWithoutMoviesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => DirectorCreateNestedOneWithoutMoviesInput, {
    nullable: false
  })
  director!: DirectorCreateNestedOneWithoutMoviesInput;
}
