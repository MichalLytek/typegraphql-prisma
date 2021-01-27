import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CreatorUncheckedUpdateInput } from "../../../inputs/CreatorUncheckedUpdateInput";
import { CreatorWhereUniqueInput } from "../../../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorUncheckedUpdateInput, {
    nullable: false
  })
  data!: CreatorUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;
}
