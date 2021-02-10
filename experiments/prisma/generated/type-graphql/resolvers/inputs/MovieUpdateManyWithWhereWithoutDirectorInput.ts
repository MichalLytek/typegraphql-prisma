import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyMutationInput } from "../inputs/MovieUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateManyWithWhereWithoutDirectorInput {
  @TypeGraphQL.Field(_type => MovieScalarWhereInput, {
    nullable: false
  })
  where!: MovieScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieUpdateManyMutationInput;
}
