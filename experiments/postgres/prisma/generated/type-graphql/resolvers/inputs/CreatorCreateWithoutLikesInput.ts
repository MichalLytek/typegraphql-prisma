import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemCreateNestedManyWithoutCreatorInput } from "../inputs/ProblemCreateNestedManyWithoutCreatorInput";

@TypeGraphQL.InputType("CreatorCreateWithoutLikesInput")
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
