import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput } from "../inputs/MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MovieWhereUniqueInput {
  @TypeGraphQL.Field(_type => MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  directorFirstName_directorLastName_title?: MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput | undefined;
}
