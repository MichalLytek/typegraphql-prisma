import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieUncheckedCreateManyWithoutDirectorInput } from "../inputs/MovieUncheckedCreateManyWithoutDirectorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorUncheckedCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => MovieUncheckedCreateManyWithoutDirectorInput, {
    nullable: true
  })
  movies?: MovieUncheckedCreateManyWithoutDirectorInput | undefined;
}
