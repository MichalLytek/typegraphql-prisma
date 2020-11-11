import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CreatorCreateWithoutLikesInput } from "../inputs/CreatorCreateWithoutLikesInput";
import { CreatorUpdateWithoutLikesInput } from "../inputs/CreatorUpdateWithoutLikesInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CreatorUpsertWithWhereUniqueWithoutLikesInput {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorUpdateWithoutLikesInput, {
    nullable: false,
    description: undefined
  })
  update!: CreatorUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => CreatorCreateWithoutLikesInput, {
    nullable: false,
    description: undefined
  })
  create!: CreatorCreateWithoutLikesInput;
}
