import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
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
