import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ProblemCreateOrConnectWithoutcreatorInput } from "../inputs/ProblemCreateOrConnectWithoutcreatorInput";
import { ProblemCreateWithoutCreatorInput } from "../inputs/ProblemCreateWithoutCreatorInput";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput";
import { ProblemUpdateManyWithWhereWithoutCreatorInput } from "../inputs/ProblemUpdateManyWithWhereWithoutCreatorInput";
import { ProblemUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/ProblemUpdateWithWhereUniqueWithoutCreatorInput";
import { ProblemUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/ProblemUpsertWithWhereUniqueWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProblemUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [ProblemCreateWithoutCreatorInput], {
    nullable: true,
    description: undefined
  })
  create?: ProblemCreateWithoutCreatorInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ProblemUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true,
    description: undefined
  })
  update?: ProblemUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ProblemUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ProblemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ProblemUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemCreateOrConnectWithoutcreatorInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ProblemCreateOrConnectWithoutcreatorInput[] | undefined;
}
