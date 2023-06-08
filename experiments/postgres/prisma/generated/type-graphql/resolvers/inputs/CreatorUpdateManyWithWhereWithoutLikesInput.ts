import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorScalarWhereInput } from "../inputs/CreatorScalarWhereInput";
import { CreatorUpdateManyMutationInput } from "../inputs/CreatorUpdateManyMutationInput";

@TypeGraphQL.InputType("CreatorUpdateManyWithWhereWithoutLikesInput")
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
