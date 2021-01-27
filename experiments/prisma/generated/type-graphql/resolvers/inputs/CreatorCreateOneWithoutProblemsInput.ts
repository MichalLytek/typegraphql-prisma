import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateOrConnectWithoutproblemsInput } from "../inputs/CreatorCreateOrConnectWithoutproblemsInput";
import { CreatorUncheckedCreateWithoutProblemsInput } from "../inputs/CreatorUncheckedCreateWithoutProblemsInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateOneWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorUncheckedCreateWithoutProblemsInput, {
    nullable: true
  })
  create?: CreatorUncheckedCreateWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: true
  })
  connect?: CreatorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CreatorCreateOrConnectWithoutproblemsInput, {
    nullable: true
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutproblemsInput | undefined;
}
