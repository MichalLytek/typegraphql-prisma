import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorScalarWhereInput } from "../inputs/CreatorScalarWhereInput";
import { CreatorUpdateManyMutationInput } from "../inputs/CreatorUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpdateManyWithWhereWithoutLikesInput {
  @TypeGraphQL.Field(_type => CreatorScalarWhereInput, {
    nullable: false
  })
  where!: CreatorScalarWhereInput;

  @TypeGraphQL.Field(_type => CreatorUpdateManyMutationInput, {
    nullable: false
  })
  data!: CreatorUpdateManyMutationInput;
}
