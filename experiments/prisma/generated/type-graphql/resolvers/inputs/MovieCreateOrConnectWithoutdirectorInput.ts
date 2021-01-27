import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieUncheckedCreateWithoutDirectorInput } from "../inputs/MovieUncheckedCreateWithoutDirectorInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateOrConnectWithoutdirectorInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUncheckedCreateWithoutDirectorInput, {
    nullable: false
  })
  create!: MovieUncheckedCreateWithoutDirectorInput;
}
