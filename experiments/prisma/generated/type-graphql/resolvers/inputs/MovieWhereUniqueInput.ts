import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput } from "../inputs/MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieWhereUniqueInput {
  @TypeGraphQL.Field(_type => MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput, {
    nullable: true
  })
  directorFirstName_directorLastName_title?: MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput | undefined;
}
