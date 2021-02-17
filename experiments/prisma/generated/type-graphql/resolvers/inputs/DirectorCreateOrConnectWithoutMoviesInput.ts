import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: false
  })
  where!: DirectorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DirectorCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: DirectorCreateWithoutMoviesInput;
}
