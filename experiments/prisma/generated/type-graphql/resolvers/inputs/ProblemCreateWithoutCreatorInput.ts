import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCreateNestedManyWithoutLikesInput } from "../inputs/CreatorCreateNestedManyWithoutLikesInput";

@TypeGraphQL.InputType("ProblemCreateWithoutCreatorInput", {
  isAbstract: true
})
export class ProblemCreateWithoutCreatorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @TypeGraphQL.Field(_type => CreatorCreateNestedManyWithoutLikesInput, {
    nullable: true
  })
  likedBy?: CreatorCreateNestedManyWithoutLikesInput | undefined;
}
