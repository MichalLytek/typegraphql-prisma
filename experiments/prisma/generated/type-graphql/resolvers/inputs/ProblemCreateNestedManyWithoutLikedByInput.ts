import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemCreateOrConnectWithoutLikedByInput } from "../inputs/ProblemCreateOrConnectWithoutLikedByInput";
import { ProblemCreateWithoutLikedByInput } from "../inputs/ProblemCreateWithoutLikedByInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateNestedManyWithoutLikedByInput {
  @TypeGraphQL.Field(_type => [ProblemCreateWithoutLikedByInput], {
    nullable: true
  })
  create?: ProblemCreateWithoutLikedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemCreateOrConnectWithoutLikedByInput], {
    nullable: true
  })
  connectOrCreate?: ProblemCreateOrConnectWithoutLikedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  connect?: ProblemWhereUniqueInput[] | undefined;
}
