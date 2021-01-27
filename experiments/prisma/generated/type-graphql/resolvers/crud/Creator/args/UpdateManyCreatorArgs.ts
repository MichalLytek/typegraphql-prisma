import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CreatorUncheckedUpdateManyInput } from "../../../inputs/CreatorUncheckedUpdateManyInput";
import { CreatorWhereInput } from "../../../inputs/CreatorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: CreatorUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;
}
