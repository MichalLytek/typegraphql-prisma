import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieCreateManyDirectorInputEnvelope } from "../inputs/MovieCreateManyDirectorInputEnvelope";
import { MovieCreateOrConnectWithoutDirectorInput } from "../inputs/MovieCreateOrConnectWithoutDirectorInput";
import { MovieCreateWithoutDirectorInput } from "../inputs/MovieCreateWithoutDirectorInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateNestedManyWithoutDirectorInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutDirectorInput], {
    nullable: true
  })
  create?: MovieCreateWithoutDirectorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutDirectorInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieCreateManyDirectorInputEnvelope, {
    nullable: true
  })
  createMany?: MovieCreateManyDirectorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
