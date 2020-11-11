import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { DirectorCreateOrConnectWithoutmoviesInput } from "../inputs/DirectorCreateOrConnectWithoutmoviesInput";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorUpdateWithoutMoviesInput } from "../inputs/DirectorUpdateWithoutMoviesInput";
import { DirectorUpsertWithoutMoviesInput } from "../inputs/DirectorUpsertWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorUpdateOneRequiredWithoutMoviesInput {
  @TypeGraphQL.Field(_type => DirectorCreateWithoutMoviesInput, {
    nullable: true,
    description: undefined
  })
  create?: DirectorCreateWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: DirectorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DirectorUpdateWithoutMoviesInput, {
    nullable: true,
    description: undefined
  })
  update?: DirectorUpdateWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorUpsertWithoutMoviesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: DirectorUpsertWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => DirectorCreateOrConnectWithoutmoviesInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: DirectorCreateOrConnectWithoutmoviesInput | undefined;
}
