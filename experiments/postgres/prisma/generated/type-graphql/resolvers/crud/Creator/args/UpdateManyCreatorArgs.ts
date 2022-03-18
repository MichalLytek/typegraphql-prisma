import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorUpdateManyMutationInput } from "../../../inputs/CreatorUpdateManyMutationInput";
import { CreatorWhereInput } from "../../../inputs/CreatorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorUpdateManyMutationInput, {
    nullable: false
  })
  data!: CreatorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;
}
