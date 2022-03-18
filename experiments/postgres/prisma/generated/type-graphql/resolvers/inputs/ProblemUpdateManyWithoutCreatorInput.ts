import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemCreateManyCreatorInputEnvelope } from "../inputs/ProblemCreateManyCreatorInputEnvelope";
import { ProblemCreateOrConnectWithoutCreatorInput } from "../inputs/ProblemCreateOrConnectWithoutCreatorInput";
import { ProblemCreateWithoutCreatorInput } from "../inputs/ProblemCreateWithoutCreatorInput";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput";
import { ProblemUpdateManyWithWhereWithoutCreatorInput } from "../inputs/ProblemUpdateManyWithWhereWithoutCreatorInput";
import { ProblemUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/ProblemUpdateWithWhereUniqueWithoutCreatorInput";
import { ProblemUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/ProblemUpsertWithWhereUniqueWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType("ProblemUpdateManyWithoutCreatorInput", {
  isAbstract: true
})
export class ProblemUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [ProblemCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: ProblemCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: ProblemCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: ProblemUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => ProblemCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: ProblemCreateManyCreatorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  connect?: ProblemWhereUniqueInput[] | undefined;

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
}
