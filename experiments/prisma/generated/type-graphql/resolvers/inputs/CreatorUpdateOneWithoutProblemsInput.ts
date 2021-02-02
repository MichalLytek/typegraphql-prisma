import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateOrConnectWithoutproblemsInput } from "../inputs/CreatorCreateOrConnectWithoutproblemsInput";
import { CreatorUncheckedCreateWithoutProblemsInput } from "../inputs/CreatorUncheckedCreateWithoutProblemsInput";
import { CreatorUncheckedUpdateWithoutProblemsInput } from "../inputs/CreatorUncheckedUpdateWithoutProblemsInput";
import { CreatorUpsertWithoutProblemsInput } from "../inputs/CreatorUpsertWithoutProblemsInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpdateOneWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorUncheckedCreateWithoutProblemsInput, {
    nullable: true
  })
  create?: CreatorUncheckedCreateWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorCreateOrConnectWithoutproblemsInput, {
    nullable: true
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutproblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpsertWithoutProblemsInput, {
    nullable: true
  })
  upsert?: CreatorUpsertWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: true
  })
  connect?: CreatorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CreatorUncheckedUpdateWithoutProblemsInput, {
    nullable: true
  })
  update?: CreatorUncheckedUpdateWithoutProblemsInput | undefined;
}
