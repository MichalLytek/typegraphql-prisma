import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorScalarWhereInput } from "../inputs/CreatorScalarWhereInput";
import { CreatorUncheckedUpdateManyWithoutLikedByInput } from "../inputs/CreatorUncheckedUpdateManyWithoutLikedByInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpdateManyWithWhereWithoutLikesInput {
  @TypeGraphQL.Field(_type => CreatorScalarWhereInput, {
    nullable: false
  })
  where!: CreatorScalarWhereInput;

  @TypeGraphQL.Field(_type => CreatorUncheckedUpdateManyWithoutLikedByInput, {
    nullable: false
  })
  data!: CreatorUncheckedUpdateManyWithoutLikedByInput;
}
