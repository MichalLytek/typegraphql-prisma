import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorFirstNameLastNameCompoundUniqueInput } from "../inputs/DirectorFirstNameLastNameCompoundUniqueInput";
import { DirectorWhereInput } from "../inputs/DirectorWhereInput";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("DirectorWhereUniqueInput", {
  isAbstract: true
})
export class DirectorWhereUniqueInput {
  @TypeGraphQL.Field(_type => DirectorFirstNameLastNameCompoundUniqueInput, {
    nullable: true
  })
  firstName_lastName?: DirectorFirstNameLastNameCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [DirectorWhereInput], {
    nullable: true
  })
  AND?: DirectorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DirectorWhereInput], {
    nullable: true
  })
  OR?: DirectorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DirectorWhereInput], {
    nullable: true
  })
  NOT?: DirectorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  movies?: MovieListRelationFilter | undefined;
}
