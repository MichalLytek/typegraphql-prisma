import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieCreateNestedManyWithoutDirectorInput } from "../inputs/MovieCreateNestedManyWithoutDirectorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutDirectorInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutDirectorInput | undefined;
}
