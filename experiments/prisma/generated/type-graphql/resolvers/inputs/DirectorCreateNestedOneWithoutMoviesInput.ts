import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { DirectorCreateOrConnectWithoutMoviesInput } from "../inputs/DirectorCreateOrConnectWithoutMoviesInput";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorCreateNestedOneWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DirectorCreateWithoutMoviesInput, {
    nullable: true
  })
  create?: DirectorCreateWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorCreateOrConnectWithoutMoviesInput, {
    nullable: true
  })
  connectOrCreate?: DirectorCreateOrConnectWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: true
  })
  connect?: DirectorWhereUniqueInput | undefined;
}
