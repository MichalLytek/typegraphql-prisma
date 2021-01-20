import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieCreateManyWithoutDirectorInput } from "../inputs/MovieCreateManyWithoutDirectorInput";

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

  @TypeGraphQL.Field(_type => MovieCreateManyWithoutDirectorInput, {
    nullable: true
  })
  movies?: MovieCreateManyWithoutDirectorInput | undefined;
}
