import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { DirectorUncheckedCreateWithoutMoviesInput } from "../inputs/DirectorUncheckedCreateWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorCreateOrConnectWithoutmoviesInput {
  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: false
  })
  where!: DirectorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DirectorUncheckedCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: DirectorUncheckedCreateWithoutMoviesInput;
}
