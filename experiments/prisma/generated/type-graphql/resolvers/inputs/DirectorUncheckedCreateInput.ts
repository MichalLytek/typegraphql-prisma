import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieUncheckedCreateNestedManyWithoutDirectorInput } from "../inputs/MovieUncheckedCreateNestedManyWithoutDirectorInput";

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

  @TypeGraphQL.Field(_type => MovieUncheckedCreateNestedManyWithoutDirectorInput, {
    nullable: true
  })
  movies?: MovieUncheckedCreateNestedManyWithoutDirectorInput | undefined;
}
