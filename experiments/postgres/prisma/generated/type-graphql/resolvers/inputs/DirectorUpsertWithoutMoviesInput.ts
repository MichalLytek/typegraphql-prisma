import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorUpdateWithoutMoviesInput } from "../inputs/DirectorUpdateWithoutMoviesInput";
import { DirectorWhereInput } from "../inputs/DirectorWhereInput";

@TypeGraphQL.InputType("DirectorUpsertWithoutMoviesInput")
export class DirectorUpsertWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DirectorUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: DirectorUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => DirectorCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: DirectorCreateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => DirectorWhereInput, {
    nullable: true
  })
  where?: DirectorWhereInput | undefined;
}
