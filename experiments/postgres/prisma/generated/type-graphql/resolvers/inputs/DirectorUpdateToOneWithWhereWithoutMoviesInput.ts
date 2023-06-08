import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorUpdateWithoutMoviesInput } from "../inputs/DirectorUpdateWithoutMoviesInput";
import { DirectorWhereInput } from "../inputs/DirectorWhereInput";

@TypeGraphQL.InputType("DirectorUpdateToOneWithWhereWithoutMoviesInput")
export class DirectorUpdateToOneWithWhereWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DirectorWhereInput, {
    nullable: true
  })
  where?: DirectorWhereInput | undefined;

  @TypeGraphQL.Field(_type => DirectorUpdateWithoutMoviesInput, {
    nullable: false
  })
  data!: DirectorUpdateWithoutMoviesInput;
}
