import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { DirectorUncheckedCreateWithoutMoviesInput } from "../inputs/DirectorUncheckedCreateWithoutMoviesInput";
import { DirectorUncheckedUpdateWithoutMoviesInput } from "../inputs/DirectorUncheckedUpdateWithoutMoviesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorUpsertWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DirectorUncheckedUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: DirectorUncheckedUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => DirectorUncheckedCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: DirectorUncheckedCreateWithoutMoviesInput;
}
