import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CreatorCreateOrConnectWithoutproblemsInput {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: false,
    description: undefined
  })
  create!: CreatorCreateWithoutProblemsInput;
}
