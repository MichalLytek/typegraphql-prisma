import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CreatorUpdateWithoutLikesInput } from "../inputs/CreatorUpdateWithoutLikesInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CreatorUpdateWithWhereUniqueWithoutLikesInput {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorUpdateWithoutLikesInput, {
    nullable: false,
    description: undefined
  })
  data!: CreatorUpdateWithoutLikesInput;
}
