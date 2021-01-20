import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemCreateOrConnectWithoutcreatorInput } from "../inputs/ProblemCreateOrConnectWithoutcreatorInput";
import { ProblemCreateWithoutCreatorInput } from "../inputs/ProblemCreateWithoutCreatorInput";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput";
import { ProblemUpdateManyWithWhereWithoutCreatorInput } from "../inputs/ProblemUpdateManyWithWhereWithoutCreatorInput";
import { ProblemUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/ProblemUpdateWithWhereUniqueWithoutCreatorInput";
import { ProblemUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/ProblemUpsertWithWhereUniqueWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [ProblemCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: ProblemCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  connect?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  set?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  delete?: ProblemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: ProblemUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: ProblemUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProblemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: ProblemUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemCreateOrConnectWithoutcreatorInput], {
    nullable: true
  })
  connectOrCreate?: ProblemCreateOrConnectWithoutcreatorInput[] | undefined;
}
