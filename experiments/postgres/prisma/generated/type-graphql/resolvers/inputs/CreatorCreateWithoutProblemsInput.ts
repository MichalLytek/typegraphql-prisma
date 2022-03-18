import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemCreateNestedManyWithoutLikedByInput } from "../inputs/ProblemCreateNestedManyWithoutLikedByInput";

@TypeGraphQL.InputType("CreatorCreateWithoutProblemsInput", {
  isAbstract: true
})
export class CreatorCreateWithoutProblemsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ProblemCreateNestedManyWithoutLikedByInput, {
    nullable: true
  })
  likes?: ProblemCreateNestedManyWithoutLikedByInput | undefined;
}
