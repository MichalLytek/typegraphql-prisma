import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyMutationInput } from "../inputs/MovieUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieUpdateManyWithWhereWithoutDirectorInput {
  @TypeGraphQL.Field(_type => MovieScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: MovieScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieUpdateManyMutationInput, {
    nullable: false,
    description: undefined
  })
  data!: MovieUpdateManyMutationInput;
}
