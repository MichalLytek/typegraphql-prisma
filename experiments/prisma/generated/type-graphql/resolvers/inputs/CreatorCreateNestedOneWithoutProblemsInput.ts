import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateOrConnectWithoutProblemsInput } from "../inputs/CreatorCreateOrConnectWithoutProblemsInput";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateNestedOneWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: true
  })
  create?: CreatorCreateWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorCreateOrConnectWithoutProblemsInput, {
    nullable: true
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: true
  })
  connect?: CreatorWhereUniqueInput | undefined;
}
