import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemUpdateManyWithoutCreatorNestedInput } from "../inputs/ProblemUpdateManyWithoutCreatorNestedInput";

@TypeGraphQL.InputType("CreatorUpdateWithoutLikesInput", {})
export class CreatorUpdateWithoutLikesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => ProblemUpdateManyWithoutCreatorNestedInput, {
    nullable: true
  })
  problems?: ProblemUpdateManyWithoutCreatorNestedInput | undefined;
}
