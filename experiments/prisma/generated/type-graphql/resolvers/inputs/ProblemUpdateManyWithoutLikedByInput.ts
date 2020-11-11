import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ProblemCreateOrConnectWithoutlikedByInput } from "../inputs/ProblemCreateOrConnectWithoutlikedByInput";
import { ProblemCreateWithoutLikedByInput } from "../inputs/ProblemCreateWithoutLikedByInput";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput";
import { ProblemUpdateManyWithWhereWithoutLikedByInput } from "../inputs/ProblemUpdateManyWithWhereWithoutLikedByInput";
import { ProblemUpdateWithWhereUniqueWithoutLikedByInput } from "../inputs/ProblemUpdateWithWhereUniqueWithoutLikedByInput";
import { ProblemUpsertWithWhereUniqueWithoutLikedByInput } from "../inputs/ProblemUpsertWithWhereUniqueWithoutLikedByInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProblemUpdateManyWithoutLikedByInput {
  @TypeGraphQL.Field(_type => [ProblemCreateWithoutLikedByInput], {
    nullable: true,
    description: undefined
  })
  create?: ProblemCreateWithoutLikedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpdateWithWhereUniqueWithoutLikedByInput], {
    nullable: true,
    description: undefined
  })
  update?: ProblemUpdateWithWhereUniqueWithoutLikedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpdateManyWithWhereWithoutLikedByInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ProblemUpdateManyWithWhereWithoutLikedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ProblemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpsertWithWhereUniqueWithoutLikedByInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ProblemUpsertWithWhereUniqueWithoutLikedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemCreateOrConnectWithoutlikedByInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ProblemCreateOrConnectWithoutlikedByInput[] | undefined;
}
