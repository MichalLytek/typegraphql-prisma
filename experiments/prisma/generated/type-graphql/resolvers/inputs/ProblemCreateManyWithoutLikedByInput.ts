import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ProblemCreateOrConnectWithoutlikedByInput } from "../inputs/ProblemCreateOrConnectWithoutlikedByInput";
import { ProblemCreateWithoutLikedByInput } from "../inputs/ProblemCreateWithoutLikedByInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProblemCreateManyWithoutLikedByInput {
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

  @TypeGraphQL.Field(_type => [ProblemCreateOrConnectWithoutlikedByInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: ProblemCreateOrConnectWithoutlikedByInput[] | undefined;
}
