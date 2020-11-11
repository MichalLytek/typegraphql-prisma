import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CreatorScalarWhereInput } from "../inputs/CreatorScalarWhereInput";
import { CreatorUpdateManyMutationInput } from "../inputs/CreatorUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CreatorUpdateManyWithWhereWithoutLikesInput {
  @TypeGraphQL.Field(_type => CreatorScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: CreatorScalarWhereInput;

  @TypeGraphQL.Field(_type => CreatorUpdateManyMutationInput, {
    nullable: false,
    description: undefined
  })
  data!: CreatorUpdateManyMutationInput;
}
