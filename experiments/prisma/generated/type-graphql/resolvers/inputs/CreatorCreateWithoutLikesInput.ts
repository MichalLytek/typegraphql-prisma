import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemCreateNestedManyWithoutCreatorInput } from "../inputs/ProblemCreateNestedManyWithoutCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateWithoutLikesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => ProblemCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  problems?: ProblemCreateNestedManyWithoutCreatorInput | undefined;
}
