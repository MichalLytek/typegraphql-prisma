import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { DirectorCreateOrConnectWithoutmoviesInput } from "../inputs/DirectorCreateOrConnectWithoutmoviesInput";
import { DirectorUncheckedCreateWithoutMoviesInput } from "../inputs/DirectorUncheckedCreateWithoutMoviesInput";
import { DirectorUncheckedUpdateWithoutMoviesInput } from "../inputs/DirectorUncheckedUpdateWithoutMoviesInput";
import { DirectorUpsertWithoutMoviesInput } from "../inputs/DirectorUpsertWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorUpdateOneRequiredWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DirectorUncheckedCreateWithoutMoviesInput, {
    nullable: true
  })
  create?: DirectorUncheckedCreateWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorCreateOrConnectWithoutmoviesInput, {
    nullable: true
  })
  connectOrCreate?: DirectorCreateOrConnectWithoutmoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorUpsertWithoutMoviesInput, {
    nullable: true
  })
  upsert?: DirectorUpsertWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: true
  })
  connect?: DirectorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DirectorUncheckedUpdateWithoutMoviesInput, {
    nullable: true
  })
  update?: DirectorUncheckedUpdateWithoutMoviesInput | undefined;
}
