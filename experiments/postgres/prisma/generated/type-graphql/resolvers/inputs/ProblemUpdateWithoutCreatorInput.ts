import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorUpdateManyWithoutLikesNestedInput } from "../inputs/CreatorUpdateManyWithoutLikesNestedInput";

@TypeGraphQL.InputType("ProblemUpdateWithoutCreatorInput", {
  isAbstract: true
})
export class ProblemUpdateWithoutCreatorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  problemText?: string | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateManyWithoutLikesNestedInput, {
    nullable: true
  })
  likedBy?: CreatorUpdateManyWithoutLikesNestedInput | undefined;
}
