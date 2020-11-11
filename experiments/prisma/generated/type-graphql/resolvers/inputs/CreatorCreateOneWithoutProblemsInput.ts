import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CreatorCreateOrConnectWithoutproblemsInput } from "../inputs/CreatorCreateOrConnectWithoutproblemsInput";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CreatorCreateOneWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: true,
    description: undefined
  })
  create?: CreatorCreateWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CreatorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CreatorCreateOrConnectWithoutproblemsInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutproblemsInput | undefined;
}
