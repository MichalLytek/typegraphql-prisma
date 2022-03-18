import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemCreateOrConnectWithoutLikedByInput } from "../inputs/ProblemCreateOrConnectWithoutLikedByInput";
import { ProblemCreateWithoutLikedByInput } from "../inputs/ProblemCreateWithoutLikedByInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@TypeGraphQL.InputType("ProblemCreateNestedManyWithoutLikedByInput", {
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
