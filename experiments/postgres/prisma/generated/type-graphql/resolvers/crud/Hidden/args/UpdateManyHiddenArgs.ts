import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenUpdateManyMutationInput } from "../../../inputs/HiddenUpdateManyMutationInput";
import { HiddenWhereInput } from "../../../inputs/HiddenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyHiddenArgs {
  @TypeGraphQL.Field(_type => HiddenUpdateManyMutationInput, {
    nullable: false
  })
  data!: HiddenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => HiddenWhereInput, {
    nullable: true
  })
  where?: HiddenWhereInput | undefined;
}
