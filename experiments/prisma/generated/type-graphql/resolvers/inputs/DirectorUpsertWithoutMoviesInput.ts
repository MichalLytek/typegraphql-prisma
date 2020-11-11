import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorUpdateWithoutMoviesInput } from "../inputs/DirectorUpdateWithoutMoviesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorUpsertWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DirectorUpdateWithoutMoviesInput, {
    nullable: false,
    description: undefined
  })
  update!: DirectorUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => DirectorCreateWithoutMoviesInput, {
    nullable: false,
    description: undefined
  })
  create!: DirectorCreateWithoutMoviesInput;
}
