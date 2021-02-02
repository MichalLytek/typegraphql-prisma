import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { DirectorCreateOrConnectWithoutmoviesInput } from "../inputs/DirectorCreateOrConnectWithoutmoviesInput";
import { DirectorUncheckedCreateWithoutMoviesInput } from "../inputs/DirectorUncheckedCreateWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorCreateNestedOneWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DirectorUncheckedCreateWithoutMoviesInput, {
    nullable: true
  })
  create?: DirectorUncheckedCreateWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorCreateOrConnectWithoutmoviesInput, {
    nullable: true
  })
  connectOrCreate?: DirectorCreateOrConnectWithoutmoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: true
  })
  connect?: DirectorWhereUniqueInput | undefined;
}
