import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CreatorCreateOrConnectWithoutlikesInput } from "../inputs/CreatorCreateOrConnectWithoutlikesInput";
import { CreatorCreateWithoutLikesInput } from "../inputs/CreatorCreateWithoutLikesInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CreatorCreateManyWithoutLikesInput {
  @TypeGraphQL.Field(_type => [CreatorCreateWithoutLikesInput], {
    nullable: true,
    description: undefined
  })
  create?: CreatorCreateWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CreatorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorCreateOrConnectWithoutlikesInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutlikesInput[] | undefined;
}
